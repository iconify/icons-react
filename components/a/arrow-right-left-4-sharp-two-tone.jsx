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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.k_yf0ckfx {
  stroke-opacity: 0.4;
  d: path("M2 8L21 8L16.7071 3.7071");
}

.qgmjcmbvp {
  d: path("M22 16L3 16L7.2929 20.2929");
}
</style><g class="gp_8x1bzb"><path class="k_yf0ckfx"/><path class="qgmjcmbvp"/></g>`,
		"fallback": "keyline-icons:arrow-right-left-4-sharp-two-tone",
	});
}

export default Component;
