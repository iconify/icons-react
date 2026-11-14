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

.j2s85gbzi {
  d: path("M3 16h18l-2.5 4h-13Zm3.668-8.445l4.5-3a1.5 1.5 0 0 1 1.664 0l4.5 3A1.5 1.5 0 0 1 18 8.803V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 14.5V8.803a1.5 1.5 0 0 1 .668-1.248");
}

.o_kt2rbdn {
  d: path("M12 11za1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 12 16a1.5 1.5 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 12 11");
}
</style><g class="hntgybcog"><path class="j2s85gbzi"/><path class="o_kt2rbdn"/></g>`,
		"fallback": "uix:houseboat",
	});
}

export default Component;
