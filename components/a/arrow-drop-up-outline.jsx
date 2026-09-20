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
		"content": `<style>.bczq3c8be {
  fill: currentColor;
  d: path("M8.192 13.5L12 9.692l3.808 3.808z");
}
</style><path class="bczq3c8be"/>`,
		"fallback": "material-symbols-light:arrow-drop-up-outline",
	});
}

export default Component;
