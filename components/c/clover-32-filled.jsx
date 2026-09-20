import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dqehd_sro {
  fill: currentColor;
  d: path("M8.5 2a6.5 6.5 0 0 0 0 13H14a1 1 0 0 0 1-1V8.5A6.5 6.5 0 0 0 8.5 2m0 28a6.5 6.5 0 1 1 0-13H14a1 1 0 0 1 1 1v5.5A6.5 6.5 0 0 1 8.5 30m15-28a6.5 6.5 0 1 1 0 13H18a1 1 0 0 1-1-1V8.5A6.5 6.5 0 0 1 23.5 2m0 28a6.5 6.5 0 1 0 0-13H18a1 1 0 0 0-1 1v5.5a6.5 6.5 0 0 0 6.5 6.5");
}
</style><path class="dqehd_sro"/>`,
		"fallback": "fluent:clover-32-filled",
	});
}

export default Component;
