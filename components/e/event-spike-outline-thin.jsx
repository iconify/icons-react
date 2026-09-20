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

.racsvxx3t {
  d: path("M12 18h3l3 -3 3 3");
}

.v-jogvb5z {
  d: path("m10 6 -5 5h4l-5 5");
}
</style><g class="hntgybcog"><path class="v-jogvb5z"/><path class="racsvxx3t"/></g>`,
		"fallback": "iconmind:event-spike-outline-thin",
	});
}

export default Component;
