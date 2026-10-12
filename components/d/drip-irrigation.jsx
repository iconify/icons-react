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
		"content": `<style>.gn1iq53-h {
  width: 18.5px;
  height: 3px;
  x: 2.75px;
  y: 4.5px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mbnc-bb_c {
  d: path("M6.5 7.5V9M12 7.5V9m5.5-1.5V9M2.75 20.5h18.5M6.5 11c1.1 1.4 1.6 2.3 1.6 3a1.6 1.6 0 0 1-3.2 0c0-.7.5-1.6 1.6-3m5.5 0c1.1 1.4 1.6 2.3 1.6 3a1.6 1.6 0 0 1-3.2 0c0-.7.5-1.6 1.6-3m5.5 0c1.1 1.4 1.6 2.3 1.6 3a1.6 1.6 0 0 1-3.2 0c0-.7.5-1.6 1.6-3");
}
</style><g class="hntgybcog"><rect class="gn1iq53-h"/><path class="mbnc-bb_c"/></g>`,
		"fallback": "iconoven:drip-irrigation",
	});
}

export default Component;
