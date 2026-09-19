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
		"content": `<style>.p20xozb-j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.859 21.704q5.224-1.545 8.11 0m-3.938-2.503v1.73");
}

.xd-kx3b9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.635 19.783c-1.507.805-3.349 3.184-3.714 4.229c6.544-5.84 18.592-7.137 26.937.01C42.343-.452 8.236-2.924 10.238 22.357q2.16-1.98 4.397-2.573Z");
}

.xjr_yxbil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.81 28.508c-1.857 2.114-6.298 4.43-10.38 5.045l-.023 9.945h-2.54v-9.855c-2.158-.078-6.622-1.521-9.732-5.426c5.65-6.275 15.125-5.604 22.675.291");
}
</style><path class="xjr_yxbil"/><path class="xd-kx3b9d"/><path class="p20xozb-j"/>`,
		"fallback": "arcticons:animex-wallpaper",
	});
}

export default Component;
