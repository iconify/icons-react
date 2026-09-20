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
		"content": `<style>.dh-nlhghu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hbw5_ccle {
  d: path("m7 17 4 -4 4 4 4 -4");
}

.jiw8u-asa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wbm-b2ujk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14 6v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wu8f-s8su {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m7 17 4 -4 4 4 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ze3hawb4v {
  d: path("M14 6v12");
}
</style><g class="s0phu2bbs"><path class="dh-nlhghu"/><path class="jiw8u-asa"/><path class="wu8f-s8su"/><path class="wbm-b2ujk"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="hbw5_ccle"/><path class="ze3hawb4v"/></g>`,
		"fallback": "iconmind:annotation-chart-duotone-bold",
	});
}

export default Component;
