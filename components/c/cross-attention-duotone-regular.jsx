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
		"content": `<style>.dd2oi04rr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 19h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.eesouxopu {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m14.5 9.5 -5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.flq2w3bwj {
  d: path("m9.5 9.5 5 5");
}

.k5f0ncbhf {
  d: path("m14.5 9.5 -5 5");
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.mkh6f026t {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 5h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.yyxiptc6v {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9.5 9.5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="mkh6f026t"/><path class="dd2oi04rr"/><path class="yyxiptc6v"/><path class="eesouxopu"/><path class="k6nj2fbya"/><path class="rkhcgsbdl"/><path class="flq2w3bwj"/><path class="k5f0ncbhf"/></g>`,
		"fallback": "iconmind:cross-attention-duotone-regular",
	});
}

export default Component;
