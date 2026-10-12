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
		"content": `<style>.iwer1wtdo {
  cx: 18px;
  cy: 18px;
  r: 3px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o3bi57sdq {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 14h.01M13 10h.01");
}

.oc0ozoajj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.13 14.63l10-10a3 3 0 0 1 4.24 4.24l-10 10a3 3 0 0 1-4.24-4.24");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="oc0ozoajj"/><path class="o3bi57sdq"/><circle class="iwer1wtdo"/></g>`,
		"fallback": "iconoven:cucumber",
	});
}

export default Component;
