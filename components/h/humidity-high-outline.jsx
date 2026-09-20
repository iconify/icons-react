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
		"content": `<style>.j7h-chb6p {
  fill: currentColor;
  d: path("M12 20.5q-2.91 0-4.955-2.006T5 13.61q0-1.373.555-2.628t1.487-2.24L12 3.884l4.958 4.858q.933.985 1.487 2.24T19 13.615q0 2.882-2.045 4.884T12 20.5");
}
</style><path class="j7h-chb6p"/>`,
		"fallback": "material-symbols-light:humidity-high-outline",
	});
}

export default Component;
