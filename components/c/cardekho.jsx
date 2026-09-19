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
		"content": `<style>.rch34trzx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.62 31.86l-2.33 13.31C10.19 43.42 2.5 34.61 2.5 24S10.19 4.58 20.29 2.83l2.33 13.31c-3.75.65-6.6 3.92-6.6 7.86s2.85 7.21 6.6 7.86M45.5 24c0 10.61-7.69 19.42-17.79 21.17l-2.33-13.31c3.75-.65 6.6-3.92 6.6-7.86s-2.85-7.21-6.6-7.86l2.33-13.31C37.81 4.58 45.5 13.39 45.5 24");
}
</style><path class="rch34trzx"/>`,
		"fallback": "arcticons:cardekho",
	});
}

export default Component;
