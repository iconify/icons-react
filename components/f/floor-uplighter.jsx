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
		"content": `<style>.srja-2b5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.5h11Q17 11 12 11T6.5 7.5M12 11v10m-3.5 0h7M12 2.5v2.25m-3.5 0l-1-2m8 2l1-2");
}
</style><path class="srja-2b5v"/>`,
		"fallback": "uix:floor-uplighter",
	});
}

export default Component;
