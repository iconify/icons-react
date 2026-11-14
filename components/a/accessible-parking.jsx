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
		"content": `<style>.dkag5ac0u {
  d: path("M3 3h18v18H3Zm8 4h.01");
}

.f1bbb0bma {
  d: path("M10.5 11.25a3.5 3.5 0 1 1-3.5 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yu1r-pdvb {
  d: path("M11 9.75v4.5h3.75l1.75 3.5");
}
</style><g class="ulnmmdpxh"><path class="dkag5ac0u"/><path class="yu1r-pdvb"/><path class="f1bbb0bma"/></g>`,
		"fallback": "uix-sharp:accessible-parking",
	});
}

export default Component;
