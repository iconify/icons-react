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
		"content": `<style>.k7_gf9b6k {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.375 7.75h-6.75q-1.398 0-2.386.989q-.989.988-.989 2.386v.125h13.5v-.125q0-3.375-3.375-3.375m3.375 5H5.25v.125q0 3.375 3.375 3.375h6.75q3.375 0 3.375-3.375z");
}
</style><path class="k7_gf9b6k"/>`,
		"fallback": "uix-solid:fuse-electric",
	});
}

export default Component;
