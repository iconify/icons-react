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
		"content": `<style>.y99jdub8b {
  fill: currentColor;
  d: path("M4.5 15H6v-1.5h1.5V15H9V9H4.5zM6 12v-1.5h1.5V12zm5.75 3h1.5L15 9h-1.5l-1 3.425L11.5 9H10zM18 15h1.5V9h-3v1.5H18zM1 20V4h22v16zm2-2h18V6H3zm0 0V6z");
}
</style><path class="y99jdub8b"/>`,
		"fallback": "material-symbols:av1-outline-sharp",
	});
}

export default Component;
