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
		"content": `<style>.dysrf6bva {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 12 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ri2m-q_tv {
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
}

.uwjz-dbef {
  d: path("m9 12 2 2 4 -4");
}

.vws5wpblq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="vws5wpblq"/><path class="dysrf6bva"/><path class="ri2m-q_tv"/><path class="uwjz-dbef"/></g>`,
		"fallback": "iconmind:deploy-approve-duotone-thin",
	});
}

export default Component;
