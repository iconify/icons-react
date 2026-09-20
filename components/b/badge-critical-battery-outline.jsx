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
		"content": `<style>.rlua6bypz {
  fill: currentColor;
  d: path("M5.289 16.116q-.344 0-.576-.233t-.232-.575v-1.616H3v-3.384h1.48v-1.62q0-.344.233-.574q.232-.23.576-.23h14.903q.344 0 .576.233t.232.575v6.613q0 .35-.232.58t-.576.23zm.173-1H19V8.885H5.462z");
}
</style><path class="rlua6bypz"/>`,
		"fallback": "material-symbols-light:badge-critical-battery-outline",
	});
}

export default Component;
