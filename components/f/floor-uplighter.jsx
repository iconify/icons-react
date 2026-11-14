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
		"content": `<style>.cmm8bsb2f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.5h11Q17 11 12 11T6.5 7.5ZM12 11v10m-3.5 0h7M12 2.5v2.25m-3.5 0l-1-2m8 2l1-2");
}
</style><path class="cmm8bsb2f"/>`,
		"fallback": "uix-sharp:floor-uplighter",
	});
}

export default Component;
