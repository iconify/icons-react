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
		"content": `<style>.p27ii55by {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7 19.25q-1.968 0-3.359-1.391T2.25 14.5t1.391-3.359q1.152-1.152 2.7-1.35q.4-2.157 2.143-3.61q1.996-1.663 4.584-1.428t4.251 2.231q1.446 1.736 1.457 3.919q1.298.388 2.152 1.526q1.064 1.42.813 3.177t-1.67 2.822q-1.398 1.048-3.122.822z");
}
</style><path class="p27ii55by"/>`,
		"fallback": "uix-solid:cloud",
	});
}

export default Component;
