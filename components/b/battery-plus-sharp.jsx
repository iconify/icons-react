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
		"content": `<style>.ndicqlbbi {
  fill: currentColor;
  d: path("M16.385 21v-2.616h-2.616v-1h2.615V14.77h1v2.615H20v1h-2.616V21zm-8.5 0V4.48h2.423V3h3.384v1.48h2.424v7.712q-.181.039-.354.06t-.345.065q-1.898.514-3.119 2.064t-1.221 3.58q0 .818.227 1.583q.227.766.663 1.456z");
}
</style><path class="ndicqlbbi"/>`,
		"fallback": "material-symbols-light:battery-plus-sharp",
	});
}

export default Component;
