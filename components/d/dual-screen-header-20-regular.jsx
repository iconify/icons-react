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
		"content": `<style>.a1o-e8b1m {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm7.5 9V7H3v7a1 1 0 0 0 1 1zm1-8v8H16a1 1 0 0 0 1-1V7z");
}
</style><path class="a1o-e8b1m"/>`,
		"fallback": "fluent:dual-screen-header-20-regular",
	});
}

export default Component;
