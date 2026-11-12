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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r50oh-b2a {
  d: path("M12 7h7a2 2 0 0 1 2 2v2l-4 6H7l-4-6V9a2 2 0 0 1 2-2z");
}

.zzutjwbbr {
  stroke-opacity: 0.4;
  d: path("M8 11h8");
}
</style><g class="nrj6p8qat"><path class="zzutjwbbr"/><path class="r50oh-b2a"/></g>`,
		"fallback": "coolicons:hdmi-duocolor",
	});
}

export default Component;
