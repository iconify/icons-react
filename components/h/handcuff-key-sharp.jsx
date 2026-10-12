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
		"content": `<style>.jd-_3bb9l {
  d: path("M11.31 14.81a4.5 4.5 0 1 1-2.12-2.12");
}

.jo45v1frk {
  cx: 19px;
  cy: 5px;
  r: 2.25px;
}

.tk9_stbfv {
  d: path("m11.21 14.91l1.45-1.44l.42-.43l-.42-.42l-1.28-1.28l-.42-.42l-.43.42l-1.44 1.45l-.43.42l.42.42l1.29 1.29l.42.42z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zi-m-1cdt {
  d: path("M17.41 6.59L14.5 9.5l1.24 1.24");
}
</style><g class="x2cwu0gfd"><path class="jd-_3bb9l"/><path class="tk9_stbfv"/><circle class="jo45v1frk"/><path class="zi-m-1cdt"/></g>`,
		"fallback": "iconoven:handcuff-key-sharp",
	});
}

export default Component;
