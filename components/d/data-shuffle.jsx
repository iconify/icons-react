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
		"content": `<style>.gqg6zkbme {
  d: path("M3.5 17H8c5 0 3-10 8-10h3m-2 8l2.5 2l-2.5 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kstoa4xmg {
  d: path("M3.5 7H8c5 0 3 10 8 10h3");
}

.pstn25chr {
  d: path("m17 5l2.5 2L17 9");
}
</style><g class="hntgybcog"><path class="kstoa4xmg"/><path class="gqg6zkbme"/><path class="pstn25chr"/></g>`,
		"fallback": "uix:data-shuffle",
	});
}

export default Component;
