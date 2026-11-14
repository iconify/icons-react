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
		"content": `<style>.rt-j_xs4p {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.202 3.202Q2.25 4.154 2.25 5.5v13q0 1.346.952 2.298t2.298.952h13q1.346 0 2.298-.952t.952-2.298v-13q0-1.346-.952-2.298T18.5 2.25h-13q-1.346 0-2.298.952M20.25 13.75h-5v-5h5zm-5 1.5h5v3.25q0 .725-.513 1.237q-.512.513-1.237.513h-3.25zm-1.5-1.5h-5v-5h5zm-5 1.5h5v5h-5z");
}
</style><path class="rt-j_xs4p"/>`,
		"fallback": "uix-solid:cross-tab",
	});
}

export default Component;
