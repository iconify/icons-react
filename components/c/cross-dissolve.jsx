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
		"content": `<style>.n41pk765i {
  d: path("M9 10h12.5v10H9Z");
}

.ukykewbfv {
  fill: currentColor;
  d: path("M9 10h6v4H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wtrgq7b-j {
  d: path("M2.5 4H15v10H2.5Z");
}
</style><g class="ulnmmdpxh"><path class="wtrgq7b-j"/><path class="n41pk765i"/><path class="ukykewbfv"/></g>`,
		"fallback": "uix-sharp:cross-dissolve",
	});
}

export default Component;
