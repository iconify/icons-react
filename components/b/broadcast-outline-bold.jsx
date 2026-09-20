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
		"content": `<style>.fzby91bau {
  d: path("M8.24 8.63a4 4 0 0 1 7.5 0");
}

.ka7-gu1bd {
  d: path("M5.42 7.61a7 7 0 0 1 13.16 0");
}

.ricsl-blc {
  d: path("M12 12v9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wneoubc6n {
  d: path("M7 21h10");
}
</style><g class="s0phu2bbs"><path class="ricsl-blc"/><path class="wneoubc6n"/><path class="fzby91bau"/><path class="ka7-gu1bd"/></g>`,
		"fallback": "iconmind:broadcast-outline-bold",
	});
}

export default Component;
