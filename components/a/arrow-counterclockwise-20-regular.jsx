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
		"content": `<style>.rdc56lgrp {
  fill: currentColor;
  d: path("M16 10A6 6 0 0 0 5.528 6H7.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.601a7 7 0 1 1-1.98 4.361a.5.5 0 0 1 .998.076A6 6 0 1 0 16 10");
}
</style><path class="rdc56lgrp"/>`,
		"fallback": "fluent:arrow-counterclockwise-20-regular",
	});
}

export default Component;
