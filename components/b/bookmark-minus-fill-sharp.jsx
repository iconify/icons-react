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
		"content": `<style>.n_jp-q-hf {
  fill: currentColor;
  d: path("M18 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1.555.832L12 17.202l-5.445 3.63A1 1 0 0 1 5 20V4a1 1 0 0 1 1-1Zm-9 8h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2");
}
</style><path class="n_jp-q-hf"/>`,
		"fallback": "coolicons:bookmark-minus-fill-sharp",
	});
}

export default Component;
