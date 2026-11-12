import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b9fws45ro {
  fill: currentColor;
  d: path("M2.236 3.832A3 3 0 1 1 7.763 6.17a3 3 0 0 1-5.527-2.338m19.106 9.228a1.002 1.002 0 0 1 .029 1.868l-4.602 1.841l-1.841 4.602a1 1 0 0 1-1.868-.029l-4-11a1 1 0 0 1 1.282-1.282Z");
}
</style><path class="b9fws45ro"/>`,
		"fallback": "coolicons:cursor-square-fill-round",
	});
}

export default Component;
