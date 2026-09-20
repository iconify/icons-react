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
		"content": `<style>.a57hi7k7h {
  fill: currentColor;
  d: path("M15.5 16.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.cvoep2bmy {
  fill: currentColor;
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kl6dqotsr {
  fill: currentColor;
  d: path("M6 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x6f94acys {
  d: path("M6 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.xczgydgpp {
  d: path("m5 16 5 -5 3 3 4 -4");
}

.yvyzlrwov {
  d: path("M15.5 16.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.zrwkhybyf {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="cvoep2bmy"/><path class="kl6dqotsr"/><path class="a57hi7k7h"/><path class="zrwkhybyf"/><path class="xczgydgpp"/><path class="x6f94acys"/><path class="yvyzlrwov"/></g>`,
		"fallback": "iconmind:adversarial-example-duotone-regular",
	});
}

export default Component;
