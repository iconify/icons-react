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
		"content": `<style>.xwm6gq8ek {
  fill: currentColor;
  d: path("M4 22V2h10l6 6v14zm9-13V4H6v16h12V9zM6 4v5zv16z");
}
</style><path class="xwm6gq8ek"/>`,
		"fallback": "material-symbols:draft-outline-sharp",
	});
}

export default Component;
