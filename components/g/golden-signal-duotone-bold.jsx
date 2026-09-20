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
		"content": `<style>.c8kjrwb2j {
  fill: currentColor;
  d: path("m12 8 3 3 -3 3 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h7g2xihjl {
  d: path("m12 8 3 3 -3 3 -3 -3Z");
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
</style><g class="s0phu2bbs"><path class="c8kjrwb2j"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="h7g2xihjl"/></g>`,
		"fallback": "iconmind:golden-signal-duotone-bold",
	});
}

export default Component;
