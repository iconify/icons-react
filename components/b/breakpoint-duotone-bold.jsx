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
		"content": `<style>.jlpxneb5g {
  d: path("M9 8v8");
}

.n7d250moc {
  d: path("M3 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tee3b-ble {
  d: path("M10 12h11");
}

.wyj9kwb_b {
  fill: currentColor;
  d: path("M3 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="wyj9kwb_b"/><path class="n7d250moc"/><path class="tee3b-ble"/><path class="jlpxneb5g"/></g>`,
		"fallback": "iconmind:breakpoint-duotone-bold",
	});
}

export default Component;
