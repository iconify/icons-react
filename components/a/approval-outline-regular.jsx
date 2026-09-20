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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.aum97lbyp {
  d: path("M9 13h4");
}

.jlfjgzbqx {
  d: path("M9 9h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p9six2hfy {
  d: path("m8 19 3 -3 3 3 3 -3");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="jlfjgzbqx"/><path class="aum97lbyp"/><path class="p9six2hfy"/></g>`,
		"fallback": "iconmind:approval-outline-regular",
	});
}

export default Component;
