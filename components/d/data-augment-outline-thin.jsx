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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j835zw5-z {
  d: path("M3 9h18");
}

.mg7aqnbsf {
  d: path("M3 4h18");
}

.ndv19xfog {
  d: path("M3 14h10");
}

.nlg6c6b-z {
  d: path("M18.5 12v4");
}

.qypknac_m {
  d: path("M16.5 14h4");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}
</style><g class="hntgybcog"><path class="mg7aqnbsf"/><path class="j835zw5-z"/><path class="rkhcgsbdl"/><path class="ndv19xfog"/><path class="qypknac_m"/><path class="nlg6c6b-z"/></g>`,
		"fallback": "iconmind:data-augment-outline-thin",
	});
}

export default Component;
