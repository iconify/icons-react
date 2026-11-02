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
		"content": `<style>.z0gd1lu9k {
  fill: currentColor;
  d: path("m12 5.586l.293-.293a5.243 5.243 0 0 1 7.414 7.414l-4 4a5.243 5.243 0 0 1-7.414 0l-4-4a5.243 5.243 0 0 1 7.414-7.414Z");
}
</style><path class="z0gd1lu9k"/>`,
		"fallback": "coolicons:heart-alt-fill-round",
	});
}

export default Component;
