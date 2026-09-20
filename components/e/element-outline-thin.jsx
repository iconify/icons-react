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
		"content": `<style>.ahq5brb1v {
  d: path("M5 4h14v14H5Z");
}

.gcalxb98a {
  d: path("M8 13h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q518x4bkb {
  d: path("M5 9h14");
}
</style><g class="hntgybcog"><path class="ahq5brb1v"/><path class="q518x4bkb"/><path class="gcalxb98a"/></g>`,
		"fallback": "iconmind:element-outline-thin",
	});
}

export default Component;
