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
		"content": `<style>.e51rhv38y {
  fill: currentColor;
  d: path("M18.442 15.862L8.94 6.396L12 3.385l4.958 4.857q.927.877 1.484 2.218q.558 1.342.558 2.678q0 .67-.133 1.35t-.425 1.374m1.435 5.43l-3.139-3.138q-.87.86-2.132 1.353T12 20q-2.921 0-4.96-2.005T5 13.138q0-1.39.544-2.613t1.402-2.164L2.823 4.238l.708-.707l17.054 17.054z");
}
</style><path class="e51rhv38y"/>`,
		"fallback": "material-symbols-light:format-color-reset-sharp",
	});
}

export default Component;
