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
		"content": `<style>.iu-7cjbxp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.83 4.5v39m24.166-39v39M10.734 8.672h26.532c1.475 0 2.67 1.116 2.67 2.492s-1.195 2.492-2.67 2.492H10.734c-1.475 0-2.67-1.116-2.67-2.492s1.195-2.492 2.67-2.492m0 12.904h26.532c1.475 0 2.67 1.115 2.67 2.491s-1.195 2.492-2.67 2.492H10.734c-1.475 0-2.67-1.115-2.67-2.492c0-1.376 1.195-2.491 2.67-2.491m0 12.764h26.532c1.475 0 2.67 1.115 2.67 2.491s-1.195 2.492-2.67 2.492H10.734c-1.475 0-2.67-1.115-2.67-2.492c0-1.376 1.195-2.491 2.67-2.491");
}
</style><path class="iu-7cjbxp"/>`,
		"fallback": "arcticons:hyperraril",
	});
}

export default Component;
