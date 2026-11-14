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
		"content": `<style>.cc9-6ccqp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h18v4.5H3Zm0 4.5h18V16H3ZM3 16h18v4.5H3Zm9-13.5V7");
}
</style><path class="cc9-6ccqp"/>`,
		"fallback": "uix-sharp:bumper-plates-stack",
	});
}

export default Component;
