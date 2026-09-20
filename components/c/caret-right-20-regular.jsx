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
		"content": `<style>.fisv_jsma {
  fill: currentColor;
  d: path("M8.628 14.982A1 1 0 0 1 7 14.204V5.797a1 1 0 0 1 1.628-.778l4.723 3.814a1.5 1.5 0 0 1 0 2.334zM8 5.797v8.407l4.723-3.815a.5.5 0 0 0 0-.778z");
}
</style><path class="fisv_jsma"/>`,
		"fallback": "fluent:caret-right-20-regular",
	});
}

export default Component;
