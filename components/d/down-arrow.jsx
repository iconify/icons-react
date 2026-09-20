import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hxbgffb0y {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M64 105.05L32.86 62.58h19.42V22.95h23.23v39.63h19.62z");
}
</style><path class="hxbgffb0y"/>`,
		"fallback": "noto-v1:down-arrow",
	});
}

export default Component;
