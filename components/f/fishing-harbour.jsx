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
		"content": `<style>.aw9x48hsn {
  d: path("M6.5 12h9L14 15H8Zm5 0V6.5l4 5.5");
}

.jzc5m_ept {
  d: path("M17.785 5.106a9 9 0 1 1-11.57 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jzc5m_ept"/><path class="aw9x48hsn"/></g>`,
		"fallback": "uix-sharp:fishing-harbour",
	});
}

export default Component;
