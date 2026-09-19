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
		"content": `<style>.fthnmmbpx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5v37M8.206 33.252l31.588-18.504m0 18.504L8.206 14.747m6.254 3.665v-7.17m3.135-1.462L24 12.81m-9.54 5.602l-6.405 3.03M30.406 9.78L24 12.81m-6.405 25.358L24 35.138m6.406 3.03L24 35.138m-9.518-5.561l-6.405-3.03m31.868-5.105l-6.405-3.03m6.385 8.135l-6.406 3.03m.001 7.171v-7.171m-19.038 7.171v-7.171M33.54 18.412v-7.17");
}
</style><path class="fthnmmbpx"/>`,
		"fallback": "arcticons:emoji-snowflake",
	});
}

export default Component;
