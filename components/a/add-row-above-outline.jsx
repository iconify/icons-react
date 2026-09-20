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
		"content": `<style>.d7z_m4bls {
  fill: currentColor;
  d: path("M5 20h14v-6.558H5zm15 1H4V5h3.116v1H5v6.442h14V6h-2.116V5H20zm-8-7.558v-1zM11.5 8V6h-2V5h2V3h1v2h2v1h-2v2z");
}
</style><path class="d7z_m4bls"/>`,
		"fallback": "material-symbols-light:add-row-above-outline",
	});
}

export default Component;
