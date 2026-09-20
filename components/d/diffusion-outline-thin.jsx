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
		"content": `<style>.gt7coxqxq {
  d: path("M3 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.gvmht2kii {
  d: path("M3 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iedujiqkb {
  d: path("M7 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.rvtpkuisl {
  d: path("M12 8a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="gt7coxqxq"/><path class="gvmht2kii"/><path class="iedujiqkb"/><path class="rvtpkuisl"/></g>`,
		"fallback": "iconmind:diffusion-outline-thin",
	});
}

export default Component;
