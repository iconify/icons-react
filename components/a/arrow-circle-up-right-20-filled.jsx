import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qdn8ots_i {
  fill: currentColor;
  d: path("M10 18a8 8 0 1 1 0-16a8 8 0 0 1 0 16m2.851-10.856A.5.5 0 0 0 12.5 7h-5a.5.5 0 0 0 0 1h3.793l-4.147 4.146a.5.5 0 0 0 .708.708L12 8.707V12.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.144-.351z");
}
</style><path class="qdn8ots_i"/>`,
		"fallback": "fluent:arrow-circle-up-right-20-filled",
	});
}

export default Component;
