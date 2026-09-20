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
		"content": `<style>.a1z8vac9r {
  d: path("M17.5 16H22");
}

.bqqmp9bon {
  d: path("M6.5 5.5 9 8l-2.5 2.5");
}

.fj8du1bnr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17.5 13.5 15 16l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gvwxpocvb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 8h4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rncaisbya {
  d: path("M2 8h4.5");
}

.sui56iony {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6.5 5.5 9 8l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vqyzevbaw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17.5 16H22");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yzk-0x3pl {
  d: path("M17.5 13.5 15 16l2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="gvwxpocvb"/><path class="sui56iony"/><path class="vqyzevbaw"/><path class="fj8du1bnr"/><path class="rncaisbya"/><path class="bqqmp9bon"/><path class="a1z8vac9r"/><path class="yzk-0x3pl"/></g>`,
		"fallback": "iconmind:deadlock-duotone-regular",
	});
}

export default Component;
