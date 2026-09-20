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
		"content": `<style>.e8jhv79aa {
  fill: currentColor;
  d: path("M3 3v18h18V3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hkh8hr_1w {
  fill: currentColor;
  d: path("M8 8v8h8V8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mu5pjkbqo {
  d: path("M3 3v18h18V3Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.spi9wczkf {
  d: path("M8 8v8h8V8Z");
}
</style><g class="s0phu2bbs"><path class="e8jhv79aa"/><path class="hkh8hr_1w"/><path class="mu5pjkbqo"/><path class="spi9wczkf"/></g>`,
		"fallback": "iconmind:game-board-duotone-bold",
	});
}

export default Component;
