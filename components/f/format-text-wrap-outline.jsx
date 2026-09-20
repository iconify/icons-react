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
		"content": `<style>.b2pmutb1a {
  fill: currentColor;
  d: path("M4 20V4h2v16zm14 0V4h2v16zm-7.4-2.45L7.05 14l3.55-3.525l1.4 1.4L10.875 13H13q.825 0 1.413-.587T15 11t-.587-1.412T13 9H7V7h6q1.65 0 2.825 1.175T17 11t-1.175 2.825T13 15h-2.125L12 16.125z");
}
</style><path class="b2pmutb1a"/>`,
		"fallback": "material-symbols:format-text-wrap-outline",
	});
}

export default Component;
