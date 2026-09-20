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

.p87z9hb2j {
  d: path("m12 16 4.5 -4.5L21 16");
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}

.x3u_7ebsy {
  d: path("m12 20.5 4.5 -4.5 4.5 4.5");
}
</style><g class="hntgybcog"><path class="skbifdbcx"/><path class="p87z9hb2j"/><path class="x3u_7ebsy"/></g>`,
		"fallback": "iconmind:agent-upgrade-outline-thin",
	});
}

export default Component;
