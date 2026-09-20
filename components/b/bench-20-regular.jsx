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
		"content": `<style>.ve3-8hown {
  fill: currentColor;
  d: path("M3 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 1 1 0 4v1.5a.5.5 0 0 1-1 0V14H4v1.5a.5.5 0 0 1-1 0V14a2 2 0 1 1 0-4zm14 7a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2zm-1-7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4h12z");
}
</style><path class="ve3-8hown"/>`,
		"fallback": "fluent:bench-20-regular",
	});
}

export default Component;
