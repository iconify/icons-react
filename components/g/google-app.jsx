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
		"content": `<style>.zzq176z4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.55 2.5h0a21.51 21.51 0 0 1 12.18 3.63l-5.63 8.41a11.38 11.38 0 0 0-16.57 4.51l-9.08-4.39A21.35 21.35 0 0 1 23 2.51Zm.22 16.44h21.5V24A21.5 21.5 0 0 1 4.81 34.13c-.12-.26-.25-.52-.36-.79L13.54 29a11.36 11.36 0 0 0 20.46.06H23.77V18.94Z");
}
</style><path class="zzq176z4k"/>`,
		"fallback": "arcticons:google-app",
	});
}

export default Component;
