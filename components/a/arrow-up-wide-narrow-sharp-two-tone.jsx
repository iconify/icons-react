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
		"content": `<style>.g3likac1n {
  d: path("M6 19L6 6M1.7071 10.2929L6 6L10.2929 10.2929");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yopdcqsuw {
  stroke-opacity: 0.4;
  d: path("M13 6L23 6M13 10L21 10M13 14L19 14M13 18L17 18");
}
</style><g class="gp_8x1bzb"><path class="yopdcqsuw"/><path class="g3likac1n"/></g>`,
		"fallback": "keyline-icons:arrow-up-wide-narrow-sharp-two-tone",
	});
}

export default Component;
