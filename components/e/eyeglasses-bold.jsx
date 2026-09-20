import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i0j7srb6h {
  fill: currentColor;
  d: path("M200 36a12 12 0 0 0 0 24a12 12 0 0 1 12 12v50.46A47.94 47.94 0 0 0 142.75 148h-29.5A47.94 47.94 0 0 0 44 122.46V72a12 12 0 0 1 12-12a12 12 0 0 0 0-24a36 36 0 0 0-36 36v92a48 48 0 0 0 95.32 8h25.36a48 48 0 0 0 95.32-8V72a36 36 0 0 0-36-36M68 188a24 24 0 1 1 24-24a24 24 0 0 1-24 24m120 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24");
}
</style><path class="i0j7srb6h"/>`,
		"fallback": "ph:eyeglasses-bold",
	});
}

export default Component;
