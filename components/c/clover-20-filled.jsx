import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jf3lhv1er {
  fill: currentColor;
  d: path("M5.5 2a3.5 3.5 0 1 0 0 7h3a.5.5 0 0 0 .5-.5v-3A3.5 3.5 0 0 0 5.5 2m0 15a3.5 3.5 0 1 1 0-7h3a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 5.5 17m8-15a3.5 3.5 0 1 1 0 7h-3a.5.5 0 0 1-.5-.5v-3A3.5 3.5 0 0 1 13.5 2m0 15a3.5 3.5 0 1 0 0-7h-3a.5.5 0 0 0-.5.5v3a3.5 3.5 0 0 0 3.5 3.5");
}
</style><path class="jf3lhv1er"/>`,
		"fallback": "fluent:clover-20-filled",
	});
}

export default Component;
