import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j85bz6bym {
  fill: currentColor;
  d: path("M39.634 31.884a1.25 1.25 0 0 1-1.768 0L24 18.018L10.134 31.884a1.25 1.25 0 0 1-1.768-1.768l14.75-14.75a1.25 1.25 0 0 1 1.768 0l14.75 14.75a1.25 1.25 0 0 1 0 1.768");
}
</style><path class="j85bz6bym"/>`,
		"fallback": "fluent:chevron-up-48-regular",
	});
}

export default Component;
