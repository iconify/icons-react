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
		"content": `<style>.afkv2rb_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.11 24A8.11 8.11 0 0 1 24 32.11h0A8.11 8.11 0 0 1 15.89 24h0a8.11 8.11 0 0 1 16.22 0m13.39 0c0 11.874-9.626 21.5-21.5 21.5h0C12.126 45.5 2.5 35.874 2.5 24h0C2.5 12.126 12.126 2.5 24 2.5h0c11.874 0 21.5 9.626 21.5 21.5");
}
</style><path class="afkv2rb_s"/>`,
		"fallback": "arcticons:focus-launcher",
	});
}

export default Component;
