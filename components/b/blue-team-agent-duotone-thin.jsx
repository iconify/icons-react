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

.ibknshgux {
  fill: currentColor;
  d: path("M13 11h7v4l-3.5 3.5L13 15Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}

.wylohcb6p {
  d: path("M13 11h7v4l-3.5 3.5L13 15Z");
}
</style><g class="hntgybcog"><path class="ibknshgux"/><path class="skbifdbcx"/><path class="wylohcb6p"/></g>`,
		"fallback": "iconmind:blue-team-agent-duotone-thin",
	});
}

export default Component;
