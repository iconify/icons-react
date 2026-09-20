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
		"content": `<style>.bzx79xb_d {
  fill: currentColor;
  d: path("M11.385 20v-8.615H20v1h-6.908L20 19.292l-.708.708l-6.908-6.908V20zm-3.693 0v-1.23h1.231V20zM4 5.23V4h1.23v1.23zm3.692 0V4h1.231v1.23zm3.692 0V4h1.232v1.23zm3.693 0V4h1.23v1.23zm3.692 0V4H20v1.23zM4 20v-1.23h1.23V20zm0-3.692v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692v-1.23h1.23v1.23zm14.77 0v-1.23H20v1.23z");
}
</style><path class="bzx79xb_d"/>`,
		"fallback": "material-symbols-light:ink-selection-sharp",
	});
}

export default Component;
