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
		"content": `<style>.uzb-9cizj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.165 22.494v-6.788a2.71 2.71 0 0 0-2.715-2.716h-6.753V9.252A4.75 4.75 0 0 0 20.946 4.5a4.75 4.75 0 0 0-4.752 4.752v3.738H9.37a2.71 2.71 0 0 0-2.716 2.715v6.788h1.731a4.752 4.752 0 0 1 0 9.503h-1.73v6.788A2.71 2.71 0 0 0 9.37 41.5h6.823v-2.479a4.75 4.75 0 0 1 4.752-4.751a4.75 4.75 0 0 1 4.751 4.752V41.5h6.753a2.71 2.71 0 0 0 2.715-2.715v-6.788h3.428a4.752 4.752 0 0 0 0-9.503Z");
}
</style><path class="uzb-9cizj"/>`,
		"fallback": "arcticons:foxs-mmm",
	});
}

export default Component;
