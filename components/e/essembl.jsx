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
		"content": `<style>.lwiy1ebvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14 28c4.48 4.48 2 11.5 2 11.5h18V22l3.958 3.542L43.5 20L34 11.5h-3c0 7.905-14 8.478-14 0c1.264-2.19 3.358-3 7-3c6.473 0 4.93 6.197-7 3c-3.377 0-12.5 9-12.5 9l5.542 5.542s2.825-3.5 8.729-3.5s8.73 3.5 8.73 3.5");
}
</style><path class="lwiy1ebvc"/>`,
		"fallback": "arcticons:essembl",
	});
}

export default Component;
