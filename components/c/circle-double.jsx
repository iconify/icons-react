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
		"content": `<style>.uqur06b4d {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752M5.25 12q0-2.796 1.977-4.773T12 5.25t4.773 1.977T18.75 12t-1.977 4.773T12 18.75t-4.773-1.977T5.25 12");
}
</style><path class="uqur06b4d"/>`,
		"fallback": "uix-solid:circle-double",
	});
}

export default Component;
