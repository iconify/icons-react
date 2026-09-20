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
		"content": `<style>.g4h6r4ykz {
  d: path("M12 4v12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pkaragbav {
  d: path("m8 12 4 4 4 -4");
}

.qdn88l2uv {
  d: path("M7 20h10");
}
</style><g class="hntgybcog"><path class="qdn88l2uv"/><path class="g4h6r4ykz"/><path class="pkaragbav"/></g>`,
		"fallback": "iconmind:arrow-down-to-line-outline-thin",
	});
}

export default Component;
