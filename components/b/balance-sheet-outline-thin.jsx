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

.ipav-zhpr {
  d: path("M14.5 8.5v7");
}

.ky4omnbla {
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
}

.vrzboac1q {
  d: path("M9.5 8.5v7");
}
</style><g class="hntgybcog"><path class="ky4omnbla"/><path class="vrzboac1q"/><path class="ipav-zhpr"/></g>`,
		"fallback": "iconmind:balance-sheet-outline-thin",
	});
}

export default Component;
