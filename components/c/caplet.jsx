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
		"content": `<style>.v6wx8dbjz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.454 10.232l7.778-7.778l11.314 11.314l-7.778 7.778Zm5.657 5.657l7.778-7.778");
}
</style><path class="v6wx8dbjz"/>`,
		"fallback": "uix-sharp:caplet",
	});
}

export default Component;
