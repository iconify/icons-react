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
		"content": `<style>.pa7ue2brr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.412 39.326l15.326-15.327m.002-15.324c-4.233-4.233-11.095-4.233-15.328 0L7.087 24l15.325 15.325c4.233 4.233 11.094 4.233 15.327 0c4.232-4.232 4.231-11.094 0-15.325c4.231-4.232 4.232-11.093 0-15.325m.001 0L14.75 31.664m7.662-22.989l7.664 7.663");
}
</style><path class="pa7ue2brr"/>`,
		"fallback": "arcticons:instabox",
	});
}

export default Component;
