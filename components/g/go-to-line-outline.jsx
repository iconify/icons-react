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
		"content": `<style>.zr62x5iew {
  fill: currentColor;
  d: path("M10.5 7V4h3v3zm0 13v-3h3v3z");
}
</style><path class="zr62x5iew"/>`,
		"fallback": "material-symbols:go-to-line-outline",
	});
}

export default Component;
