import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ahzvh7b6r {
  fill: currentColor;
  d: path("M11.577 16.23v-3.384H9.884l2.539-5.077v3.385h1.693zM6 22V2h12v20zm1-2.5V21h10v-1.5zm0-1h10v-13H7zm0-14h10V3H7zm0 0V3zm0 15V21z");
}
</style><path class="ahzvh7b6r"/>`,
		"fallback": "material-symbols-light:charging-station-outline-sharp",
	});
}

export default Component;
