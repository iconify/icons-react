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
		"content": `<style>.f-t_rcb_j {
  fill: currentColor;
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.k6fi9qmtq {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.vuz5qcbtr {
  fill: currentColor;
  d: path("M10 10h4v8h-4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.w4m_5pbwx {
  d: path("M10 10h4v8h-4Z");
}
</style><g class="nrj6p8qat"><path class="f-t_rcb_j"/><path class="vuz5qcbtr"/><path class="k6fi9qmtq"/><path class="ozi-k-boi"/><path class="w4m_5pbwx"/></g>`,
		"fallback": "iconmind:card-virtual-duotone-regular",
	});
}

export default Component;
