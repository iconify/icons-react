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
		"content": `<style>.nv131p5kb {
  fill: currentColor;
  d: path("M7 21H3V8l13-5v7H7zm12-11c-1.1 0-2 .9-2 2H9v9h5v-5h2v5h5v-9c0-1.1-.9-2-2-2");
}
</style><path class="nv131p5kb"/>`,
		"fallback": "ic:baseline-villa",
	});
}

export default Component;
