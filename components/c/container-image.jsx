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

.hw360db2r {
  d: path("m3 7l8 4.5L19 7m-8 4.5V20m5.625-4.125l.914-.492a1.5 1.5 0 0 1 1.422 0l.914.492a.994.994 0 0 1 0 1.75l-.914.492a1.5 1.5 0 0 1-1.422 0l-.914-.492a.994.994 0 0 1 0-1.75M15 19.5l3.25 1.75l3.25-1.75");
}

.oy_gyvbyg {
  d: path("M12.183 19.334L11 20l-8-4.5V7l8-4.5L19 7v5.421");
}
</style><g class="hntgybcog"><path class="oy_gyvbyg"/><path class="hw360db2r"/></g>`,
		"fallback": "uix:container-image",
	});
}

export default Component;
