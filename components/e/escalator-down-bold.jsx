import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vp_2qtd_b {
  fill: currentColor;
  d: path("M167.51 88.49a12 12 0 0 1 17-17L188 75V48a12 12 0 0 1 24 0v27l3.51-3.52a12 12 0 0 1 17 17l-24 24a12 12 0 0 1-17 0ZM244 160v40a20 20 0 0 1-20 20h-56a12 12 0 0 1-8.82-3.86L66.75 116H32a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h56a12 12 0 0 1 8.82 3.86L189.25 140H224a20 20 0 0 1 20 20m-24 4h-36a12 12 0 0 1-8.82-3.86L82.75 60H36v32h36a12 12 0 0 1 8.82 3.86L173.25 196H220Z");
}
</style><path class="vp_2qtd_b"/>`,
		"fallback": "ph:escalator-down-bold",
	});
}

export default Component;
