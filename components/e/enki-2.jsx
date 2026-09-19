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
		"content": `<style>.aquqhs1ys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 14.25L4.5 33.75h39zm0 0v13");
}

.x6l3q_bvt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 33.75L24 27.25l-19.5 6.5");
}
</style><path class="aquqhs1ys"/><path class="x6l3q_bvt"/>`,
		"fallback": "arcticons:enki-2",
	});
}

export default Component;
