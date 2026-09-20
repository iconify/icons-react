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

.ic_pehd5a {
  d: path("M3 17h18");
}

.xi1g2jw8q {
  d: path("m3 7 3 -3 3 3 3 -3 3 3 3 -3 3 3");
}

.z0ud8rb7a {
  d: path("M9.5 10.5 12 13l2.5 -2.5");
}
</style><g class="hntgybcog"><path class="xi1g2jw8q"/><path class="z0ud8rb7a"/><path class="ic_pehd5a"/></g>`,
		"fallback": "iconmind:audio-denoise-outline-thin",
	});
}

export default Component;
