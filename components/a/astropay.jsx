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
		"content": `<style>.b00h2_kgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.32 41.467C18.387 36.131 24.791 33 31.5 33a21.5 21.5 0 0 1 8.26 1.65l-3.5-8.757a29 29 0 0 0-4.76-.393c-10.961 0-21.066 6.18-25.989 15.973z");
}

.py6d5jb3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.5 6.5L9.154 32.363a31.5 31.5 0 0 1 12.025-7.562l2.82-7.051l2.315 5.785a31.5 31.5 0 0 1 5.185-.479a32 32 0 0 1 3.711.221L28.5 6.5z");
}
</style><path class="b00h2_kgk"/><path class="py6d5jb3j"/>`,
		"fallback": "arcticons:astropay",
	});
}

export default Component;
