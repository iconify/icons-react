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

.p-4crgjtr {
  d: path("M21 12V6.444l-4.5-2.222m0 0L12 2L3 6.444v11.112L12 22V10.889M3 6.444l9 4.445l9-4.445");
}

.zkt337bsr {
  stroke-opacity: 0.4;
  d: path("m18 21l3-3l-3-3m3 3h-6");
}
</style><g class="nrj6p8qat"><path class="zkt337bsr"/><path class="p-4crgjtr"/></g>`,
		"fallback": "coolicons:box-export-duocolor-sharp",
	});
}

export default Component;
