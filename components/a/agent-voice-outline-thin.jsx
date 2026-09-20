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
		"content": `<style>.dxqp15kpa {
  d: path("M8.69 8.37a4 4 0 1 1 -3.38 0");
}

.g_ig5r7qc {
  d: path("M17.12 9.88a3 3 0 0 1 0 4.24");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.os75hg6rr {
  d: path("M19.24 7.76a6 6 0 0 1 0 8.5");
}
</style><g class="hntgybcog"><path class="dxqp15kpa"/><path class="g_ig5r7qc"/><path class="os75hg6rr"/></g>`,
		"fallback": "iconmind:agent-voice-outline-thin",
	});
}

export default Component;
