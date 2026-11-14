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
		"content": `<style>.dna95-b4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v15.5H3Zm4.5 3v9.5M12 6v9.5M16.5 6v9.5M6 18.5V21m12-2.5V21");
}
</style><path class="dna95-b4t"/>`,
		"fallback": "uix-sharp:column-radiator",
	});
}

export default Component;
