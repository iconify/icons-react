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
		"content": `<style>.ruy7jzbjh {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3H9v18H6.25A3.25 3.25 0 0 1 3 17.75zM10.5 21h7.25A3.25 3.25 0 0 0 21 17.75V15.5H10.5zM21 14V6.25A3.25 3.25 0 0 0 17.75 3H10.5v11z");
}
</style><path class="ruy7jzbjh"/>`,
		"fallback": "fluent:data-treemap-24-filled",
	});
}

export default Component;
