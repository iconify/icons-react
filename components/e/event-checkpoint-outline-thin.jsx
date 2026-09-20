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
		"content": `<style>.crv4i00bu {
  d: path("M4 3v18");
}

.h0zd56bib {
  d: path("m15 7 -3 3h2.5l-3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lulmb9b1a {
  d: path("M4 4h16v12H4");
}
</style><g class="hntgybcog"><path class="crv4i00bu"/><path class="lulmb9b1a"/><path class="h0zd56bib"/></g>`,
		"fallback": "iconmind:event-checkpoint-outline-thin",
	});
}

export default Component;
