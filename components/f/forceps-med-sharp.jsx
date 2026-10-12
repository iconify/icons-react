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
		"content": `<style>.bmhulzbig {
  d: path("M8.75 16.6L12 9.5l3.25 7.1M12 9.5V2.75M10.75 15h2.5");
}

.dhj1gvblj {
  cx: 16.5px;
  cy: 18.75px;
  r: 2.5px;
}

.vh25ytu5a {
  cx: 7.5px;
  cy: 18.75px;
  r: 2.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="vh25ytu5a"/><circle class="dhj1gvblj"/><path class="bmhulzbig"/></g>`,
		"fallback": "iconoven:forceps-med-sharp",
	});
}

export default Component;
