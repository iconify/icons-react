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
		"content": `<style>.bppr_wbcq {
  d: path("M16 7v12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tgl1-bcis {
  fill: currentColor;
  d: path("M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vavi9cbgb {
  d: path("M8 7v12");
}

.x5li7lwaz {
  d: path("M12 7v12");
}

.xxsav7b5u {
  d: path("M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="tgl1-bcis"/><path class="xxsav7b5u"/><path class="vavi9cbgb"/><path class="x5li7lwaz"/><path class="bppr_wbcq"/></g>`,
		"fallback": "iconmind:container-duotone-bold",
	});
}

export default Component;
