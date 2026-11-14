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

.vlf_y8wtt {
  d: path("M12 2.5za5 5 0 0 1 5 5v9a5 5 0 0 1-5 5a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5");
}

.w-t98bcqx {
  d: path("M10 16.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-.25-9.75h4.5m-4.5 3.5h4.5");
}
</style><g class="hntgybcog"><path class="vlf_y8wtt"/><path class="w-t98bcqx"/></g>`,
		"fallback": "uix:covid-test",
	});
}

export default Component;
