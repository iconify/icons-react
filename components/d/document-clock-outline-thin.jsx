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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vargix3eq {
  d: path("M8.5 12.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.yh_ipqbbf {
  d: path("M12 9.5v3h2.5");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="vargix3eq"/><path class="yh_ipqbbf"/></g>`,
		"fallback": "iconmind:document-clock-outline-thin",
	});
}

export default Component;
