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
		"content": `<style>.wtypthf3u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.053 32.736V42.5L24 33.1L7.947 42.5v-9.764L24 23.336zm0-17.837v9.764L24 15.264l-16.053 9.4v-9.765L24 5.5z");
}
</style><path class="wtypthf3u"/>`,
		"fallback": "arcticons:element-2",
	});
}

export default Component;
