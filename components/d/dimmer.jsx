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
		"content": `<style>.dwik-nblt {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M24 4.5a13.51 13.51 0 0 0-13.41 13.41c0 8 7.32 11.07 7.32 15.24v1.21h12.18v-1.21c0-4.15 7.32-7.2 7.32-15.24A13.51 13.51 0 0 0 24 4.5Zm-6.09 29.86v4.57h12.18v-4.57Zm0 4.57v4.57h12.18v-4.57Z");
}
</style><path class="dwik-nblt"/>`,
		"fallback": "arcticons:dimmer",
	});
}

export default Component;
