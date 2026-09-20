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
		"content": `<style>.lk5enbc7i {
  fill: currentColor;
  d: path("M11.385 20v-8.615H20v1h-6.908L20 19.292l-.708.708l-6.908-6.908V20zm-3.693 0v-1.23h1.231V20zM5.231 5.23H4q0-.507.362-.868T5.23 4zm2.461 0V4h1.231v1.23zm3.693 0V4h1.23v1.23zm3.692 0V4h1.23v1.23zm3.692 0V4q.508 0 .87.362T20 5.23zM5.231 18.77V20q-.508 0-.87-.362T4 18.77zM4 16.307v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692v-1.23h1.23v1.23zm14.77 0v-1.23H20v1.23z");
}
</style><path class="lk5enbc7i"/>`,
		"fallback": "material-symbols-light:ink-selection-outline",
	});
}

export default Component;
