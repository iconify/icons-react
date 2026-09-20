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

.e1z4j2b9e {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m7 9 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jiw8u-asa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l0kkv4bte {
  d: path("M7 17 17 7");
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

.t_0bjup3t {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 17 17 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ta4mqebfu {
  d: path("m7 9 8 8");
}
</style><g class="s0phu2bbs"><path class="dh-nlhghu"/><path class="jiw8u-asa"/><path class="t_0bjup3t"/><path class="e1z4j2b9e"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="l0kkv4bte"/><path class="ta4mqebfu"/></g>`,
		"fallback": "iconmind:break-even-duotone-bold",
	});
}

export default Component;
