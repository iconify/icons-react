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
		"content": `<style>.n5o7ctblg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.934 44.767c-11.47 3.074-23.26-3.733-26.332-15.202C.528 18.095 7.335 6.305 18.804 3.233c11.47-3.074 23.26 3.733 26.332 15.202");
}
</style><path class="n5o7ctblg"/>`,
		"fallback": "arcticons:criterion",
	});
}

export default Component;
