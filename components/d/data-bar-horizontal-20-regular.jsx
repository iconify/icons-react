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
		"content": `<style>.v8ej9o_lh {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2-2h5a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2m2-1a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zm-2 7a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2m2-1a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm-2 7a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2m2-1a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z");
}
</style><path class="v8ej9o_lh"/>`,
		"fallback": "fluent:data-bar-horizontal-20-regular",
	});
}

export default Component;
