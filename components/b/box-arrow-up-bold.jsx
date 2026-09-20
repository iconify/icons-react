import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.omi7gibdt {
  fill: currentColor;
  d: path("m226.73 66.63l-16-32A12 12 0 0 0 200 28H56a12 12 0 0 0-10.73 6.63l-16 32A12 12 0 0 0 28 72v136a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V72a12 12 0 0 0-1.27-5.37M192.58 52l6 12H57.42l6-12ZM52 204V88h152v116Zm116.49-68.49a12 12 0 0 1-17 17L140 141v39a12 12 0 0 1-24 0v-39l-11.51 11.52a12 12 0 0 1-17-17l32-32a12 12 0 0 1 17 0Z");
}
</style><path class="omi7gibdt"/>`,
		"fallback": "ph:box-arrow-up-bold",
	});
}

export default Component;
