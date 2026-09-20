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
		"content": `<style>.byegxrb7i {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 1-3.613 15.14l-.121-.065l-3.645.91a.5.5 0 0 1-.62-.441v-.082l.014-.083l.91-3.644l-.063-.12a8 8 0 0 1-.83-2.887l-.025-.382L2 10a8 8 0 0 1 8-8m0 1a7 7 0 0 0-6.106 10.425a.5.5 0 0 1 .063.272l-.014.094l-.756 3.021l3.024-.754a.5.5 0 0 1 .188-.01l.091.021l.087.039A7 7 0 1 0 10 3m0 2.5a.5.5 0 0 1 .5.5v5.5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m0 9a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5");
}
</style><path class="byegxrb7i"/>`,
		"fallback": "fluent:chat-warning-20-regular",
	});
}

export default Component;
