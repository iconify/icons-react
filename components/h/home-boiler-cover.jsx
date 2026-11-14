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
		"content": `<style>.qsokoep4l {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.875 2.75h4.25q2.123 0 3.624 1.501t1.501 3.624v8.25q0 2.123-1.501 3.624t-3.624 1.501h-4.25q-2.123 0-3.624-1.501T4.75 16.125v-8.25q0-2.123 1.501-3.624T9.875 2.75m2.125 2Q9.75 4.75 9.75 7T12 9.25T14.25 7T12 4.75m0 14q3.75 0 3.75-3.25q0-2.177-.829-3.835q-.067-.134-.18-.232q-.112-.097-.254-.145q-.07-.023-.143-.032t-.147-.004t-.145.025t-.137.052t-.125.079q-.058.045-.107.101q-.048.055-.085.12q-.036.064-.06.134q-.171.515-.503.901q-.362-1.035-1.335-1.764q-.146-.11-.327-.14q-.073-.012-.146-.01q-.074.003-.146.019q-.072.017-.139.047q-.068.031-.128.074t-.111.096t-.089.117t-.066.132q-.026.069-.038.142q-.078.466-.893 1.368Q8.25 14.258 8.25 15.5q0 3.25 3.75 3.25");
}
</style><path class="qsokoep4l"/>`,
		"fallback": "uix-solid:home-boiler-cover",
	});
}

export default Component;
