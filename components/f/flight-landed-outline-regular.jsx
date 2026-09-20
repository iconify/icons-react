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
		"content": `<style>.brjpv3b7t {
  d: path("M17.5 6.5V11");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.raivi4yli {
  d: path("M17.5 13v4.5");
}

.uwjz-dbef {
  d: path("m9 12 2 2 4 -4");
}
</style><g class="nrj6p8qat"><path class="okud9xj_d"/><path class="brjpv3b7t"/><path class="raivi4yli"/><path class="uwjz-dbef"/></g>`,
		"fallback": "iconmind:flight-landed-outline-regular",
	});
}

export default Component;
