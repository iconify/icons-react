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

.u0x7d_esv {
  d: path("M21 12V7.687a2 2 0 0 0-1.114-1.793L16.5 4.222m0 0l-3.614-1.785a2 2 0 0 0-1.772 0l-7 3.457A2 2 0 0 0 3 7.687v8.626a2 2 0 0 0 1.114 1.793l6.093 3.008A1.243 1.243 0 0 0 12 20v-9.111M3.32 6.602L12 10.89l8.68-4.287");
}

.zkt337bsr {
  stroke-opacity: 0.4;
  d: path("m18 21l3-3l-3-3m3 3h-6");
}
</style><g class="nrj6p8qat"><path class="zkt337bsr"/><path class="u0x7d_esv"/></g>`,
		"fallback": "coolicons:box-export-duocolor-round",
	});
}

export default Component;
