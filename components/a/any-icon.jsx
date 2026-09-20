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
		"content": `<style>.g8dkh6kws {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.722 5.5za8.226 8.226 0 0 1 8.222 8.222v8.222h-8.222A8.226 8.226 0 0 1 5.5 13.722A8.226 8.226 0 0 1 13.722 5.5m20.556 0za8.226 8.226 0 0 1 8.222 8.222a8.226 8.226 0 0 1-8.222 8.222h-8.222v-8.222A8.226 8.226 0 0 1 34.278 5.5M13.722 26.056h8.222v8.222a8.226 8.226 0 0 1-8.222 8.222A8.226 8.226 0 0 1 5.5 34.278a8.226 8.226 0 0 1 8.222-8.222m12.334 0h8.222a8.226 8.226 0 0 1 8.222 8.222a8.226 8.226 0 0 1-8.222 8.222a8.226 8.226 0 0 1-8.222-8.222z");
}
</style><path class="g8dkh6kws"/>`,
		"fallback": "arcticons:any-icon",
	});
}

export default Component;
