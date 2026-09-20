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
		"content": `<style>.jwwqzft8o {
  fill: currentColor;
  d: path("m11.5 4.864l-5.158 5.152l-.688-.689L12 2.981l6.346 6.346l-.688.714L12.5 4.883V12h-1zM11.5 17v-3h1v3zm0 4v-2h1v2z");
}
</style><path class="jwwqzft8o"/>`,
		"fallback": "material-symbols-light:arrow-warm-up-outline",
	});
}

export default Component;
