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
		"content": `<style>.brd43tbaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.203 39.203c8.396-8.396 8.396-22.009 0-30.406s-22.009-8.396-30.406 0s-8.396 22.009 0 30.406l5.657-5.657c-5.272-5.272-5.272-13.82 0-19.092s13.82-5.272 19.092 0s5.272 13.82 0 19.092zm-22.804-3h15.203m-13.203 4h11.203m-9.203 4h7.203");
}
</style><path class="brd43tbaw"/>`,
		"fallback": "arcticons:brmesh",
	});
}

export default Component;
