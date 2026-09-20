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
		"content": `<style>.bxq74tbvq {
  fill: currentColor;
  d: path("M16 5a3 3 0 0 1 3 3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zM3 6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z");
}
</style><path class="bxq74tbvq"/>`,
		"fallback": "fluent:battery-20-regular",
	});
}

export default Component;
