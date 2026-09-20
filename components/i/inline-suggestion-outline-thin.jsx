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
		"content": `<style>.etqzyebuj {
  d: path("M13 12h2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pesxdybze {
  d: path("M3 12h7");
}

.tb33trnmj {
  d: path("M3 18h5");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.y7_y8yq8z {
  d: path("M18.5 12H21");
}
</style><g class="hntgybcog"><path class="xgrfb-bqu"/><path class="pesxdybze"/><path class="etqzyebuj"/><path class="y7_y8yq8z"/><path class="tb33trnmj"/></g>`,
		"fallback": "iconmind:inline-suggestion-outline-thin",
	});
}

export default Component;
