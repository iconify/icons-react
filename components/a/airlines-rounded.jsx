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
		"content": `<style>.whxmucdae {
  fill: currentColor;
  d: path("m3.473 18.36l9.33-12.696q.218-.31.569-.487T14.108 5h4.934q.778 0 1.26.59q.48.59.325 1.343l-2.285 11.415q-.055.293-.277.472q-.223.18-.505.18H3.796q-.24 0-.35-.214q-.11-.215.027-.426m10.816-4.975q.799 0 1.351-.545q.552-.544.552-1.332q0-.789-.552-1.34q-.552-.552-1.351-.552q-.784 0-1.325.548t-.541 1.342t.541 1.336t1.325.543");
}
</style><path class="whxmucdae"/>`,
		"fallback": "material-symbols-light:airlines-rounded",
	});
}

export default Component;
