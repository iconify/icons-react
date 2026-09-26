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
		"content": `<style>.fymyhisch {
  d: path("M6.7017 15.3356L11 10.5L15 13.5L20.2628 8.6757M15.5 8L21 8L21 13.5");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p53xcyb3q {
  stroke-opacity: 0.4;
  d: path("M3 2L3 21L22 21");
}
</style><g class="gp_8x1bzb"><path class="p53xcyb3q"/><path class="fymyhisch"/></g>`,
		"fallback": "keyline-icons:chart-line-up-sharp-two-tone",
	});
}

export default Component;
