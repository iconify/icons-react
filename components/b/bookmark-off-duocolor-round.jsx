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
		"content": `<style>.lmxlbqbeq {
  stroke-opacity: 0.4;
  d: path("m3 2l19 19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w8ucpnboo {
  d: path("M12 4h2a4 4 0 0 1 4 4v3m0 6v1c0 .855-1.718.855-3 0l-3-2l-3 2c-1.282.855-3 .855-3 0V8c0-.85.549-1.352 1-2");
}
</style><g class="nrj6p8qat"><path class="lmxlbqbeq"/><path class="w8ucpnboo"/></g>`,
		"fallback": "coolicons:bookmark-off-duocolor-round",
	});
}

export default Component;
