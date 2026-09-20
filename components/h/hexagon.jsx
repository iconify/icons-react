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
		"content": `<style>.wk01ewu2z {
  fill: currentColor;
  d: path("M7.089 20.5L2.177 12l4.912-8.5h9.823l4.911 8.5l-4.911 8.5z");
}
</style><path class="wk01ewu2z"/>`,
		"fallback": "material-symbols-light:hexagon",
	});
}

export default Component;
