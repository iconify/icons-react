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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.joyo2ddzr {
  cx: 9px;
  cy: 18.5px;
  r: 1.25px;
}

.muwu9uvyd {
  cx: 15px;
  cy: 12px;
  r: 1.25px;
}

.o2ojnnbap {
  cx: 15px;
  cy: 5.5px;
  r: 1.25px;
}

.oy91ely1a {
  cx: 9px;
  cy: 12px;
  r: 1.25px;
}

.r27_c8b6j {
  cx: 15px;
  cy: 18.5px;
  r: 1.25px;
}

.uva_accpf {
  cx: 9px;
  cy: 5.5px;
  r: 1.25px;
}
</style><g class="hntgybcog"><circle class="uva_accpf"/><circle class="o2ojnnbap"/><circle class="oy91ely1a"/><circle class="muwu9uvyd"/><circle class="joyo2ddzr"/><circle class="r27_c8b6j"/></g>`,
		"fallback": "iconoven:drag-handle",
	});
}

export default Component;
