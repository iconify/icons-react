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

.mu5pjkbqo {
  d: path("M3 3v18h18V3Z");
}

.spi9wczkf {
  d: path("M8 8v8h8V8Z");
}
</style><g class="hntgybcog"><path class="mu5pjkbqo"/><path class="spi9wczkf"/></g>`,
		"fallback": "iconmind:game-board-outline-thin",
	});
}

export default Component;
