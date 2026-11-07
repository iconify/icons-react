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
		"content": `<style>.f_su13hyr {
  stroke-opacity: 0.4;
  d: path("m18 15l-3 3l3 3m-3-3h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p-4crgjtr {
  d: path("M21 12V6.444l-4.5-2.222m0 0L12 2L3 6.444v11.112L12 22V10.889M3 6.444l9 4.445l9-4.445");
}
</style><g class="nrj6p8qat"><path class="f_su13hyr"/><path class="p-4crgjtr"/></g>`,
		"fallback": "coolicons:box-import-duocolor-sharp",
	});
}

export default Component;
