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
		"content": `<style>.dx5s6zbrc {
  d: path("M8 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.e0ead5bmw {
  d: path("M3 12h3");
}

.f8057zb1p {
  d: path("M18 12h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jnf_2db5t {
  d: path("M12 18v3");
}

.yazo7scbq {
  d: path("M12 3v3");
}
</style><g class="hntgybcog"><path class="dx5s6zbrc"/><path class="yazo7scbq"/><path class="jnf_2db5t"/><path class="e0ead5bmw"/><path class="f8057zb1p"/></g>`,
		"fallback": "iconmind:brightness-outline-thin",
	});
}

export default Component;
