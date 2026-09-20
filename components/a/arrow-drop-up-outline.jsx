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
		"content": `<style>.d5911o9vi {
  fill: currentColor;
  d: path("m7 14l5-5l5 5z");
}
</style><path class="d5911o9vi"/>`,
		"fallback": "material-symbols:arrow-drop-up-outline",
	});
}

export default Component;
