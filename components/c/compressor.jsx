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
		"content": `<style>.w54s7hbvn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5v7.008m-4.485-2.803L24 12.506l4.485-2.802M9.704 19.515h28.591m-28.591 8.97h28.591M24 42.5v-7.008m-4.485 2.803L24 35.493l4.485 2.804");
}
</style><path class="w54s7hbvn"/>`,
		"fallback": "arcticons:compressor",
	});
}

export default Component;
