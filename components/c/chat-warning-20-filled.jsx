import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.osvy-hbve {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 1-3.613 15.14l-.121-.065l-3.645.91a.5.5 0 0 1-.62-.441v-.082l.014-.083l.91-3.644l-.063-.12a8 8 0 0 1-.83-2.887l-.025-.382L2 10a8 8 0 0 1 8-8m0 3.5a.5.5 0 0 0-.5.5v5.5a.5.5 0 0 0 1 0V6a.5.5 0 0 0-.5-.5m0 9a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5");
}
</style><path class="osvy-hbve"/>`,
		"fallback": "fluent:chat-warning-20-filled",
	});
}

export default Component;
