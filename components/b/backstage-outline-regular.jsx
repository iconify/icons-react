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
		"content": `<style>.c7dgfu7wx {
  d: path("M2 4h20");
}

.fk1mncnjn {
  d: path("M21 4v17h-2.5C17 21 17 20 17 18V4");
}

.m46vgkb_g {
  d: path("M3 4v17h2.5C7 21 7 20 7 18V4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xogm81bqq {
  d: path("M10 21v-9h4v9");
}
</style><g class="nrj6p8qat"><path class="c7dgfu7wx"/><path class="m46vgkb_g"/><path class="fk1mncnjn"/><path class="xogm81bqq"/></g>`,
		"fallback": "iconmind:backstage-outline-regular",
	});
}

export default Component;
