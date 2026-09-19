import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ll6d4ewnz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.349 23.878h27.4L12.35 4.5Zm0 0L8.25 43.5l31.498-19.622");
}
</style><path class="ll6d4ewnz"/>`,
		"fallback": "arcticons:httpshortcuts",
	});
}

export default Component;
