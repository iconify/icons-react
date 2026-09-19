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
		"content": `<style>.xnuxq8m2l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.534 20.625c-5.06 1.939-7.776-8.169-1.555-8.553c15.156-2.332 23.326 19.439 6.603 25.66c-4.665 1.16-6.22-6.221-2.716-7.776c7.776-3.888 1.939-11.28-2.332-9.33m-5.837 4.664c1.171 4.666-6.998 7.382-8.553 3.494L6.54 12.072q-1.17-3.11 1.161-4.281l5.837-1.939q3.11-1.171 3.888 1.555zm-.777 7.662a4.78 4.78 0 0 1 4.779 4.78c0 2.632-2.146 4.768-4.78 4.768s-4.779-2.136-4.779-4.769a4.78 4.78 0 0 1 4.78-4.78");
}
</style><path class="xnuxq8m2l"/>`,
		"fallback": "arcticons:bukalapak",
	});
}

export default Component;
