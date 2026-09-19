import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m-yry0bao {
  d: path("M20.396 10.22c2.795-1.084 5.103-.827 7.208 0c0 6.683-.485 13.137-1.03 19.563c-1.776.684-3.477.513-5.148 0c-.472-6.477-.977-12.945-1.03-19.563");
}

.o4jg2uk1p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 45c11.598 0 21-9.402 21-21S35.598 3 24 3S3 12.402 3 24v21z");
}

.ojua6ji1m {
  cx: 23.993px;
  cy: 35.723px;
  r: 2.777px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="o4jg2uk1p"/><g class="y9tr6bcfx"><circle class="ojua6ji1m"/><path class="m-yry0bao"/></g>`,
		"fallback": "arcticons:downdetector",
	});
}

export default Component;
