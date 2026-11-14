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
		"content": `<style>.hm6q_5uui {
  d: path("M12 7.5c-4 0-6-2.25-5.5-4.25C10 3.25 12 5 12 7.5m0 0c4 0 6-2.25 5.5-4.25C14 3.25 12 5 12 7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ip9umh_bl {
  d: path("M12 20.75C11 19 5.5 18.5 5.5 14a6.5 6.5 0 0 1 13 0c0 4.5-5.5 5-6.5 6.75");
}
</style><g class="hntgybcog"><path class="ip9umh_bl"/><path class="hm6q_5uui"/></g>`,
		"fallback": "uix:beetroot",
	});
}

export default Component;
