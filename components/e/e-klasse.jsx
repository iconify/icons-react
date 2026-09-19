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
		"content": `<style>.q44hj9_2d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.5 25.032c.663 8.625 9.579 15.455 20.48 15.455c9.698 0 17.825-5.405 19.968-12.671M7.33 24.42c13.87-4.29 30.654-1.292 37.149.186l.007-.001q.014-.3.014-.605c0-9.106-9.187-16.487-20.52-16.487c-9.9 0-18.162 5.632-20.093 13.126");
}
</style><path class="q44hj9_2d"/>`,
		"fallback": "arcticons:e-klasse",
	});
}

export default Component;
