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
		"content": `<style>.mvm31wbdj {
  fill: currentColor;
  d: path("M12 5.5a4.5 4.5 0 0 0-4.495 4.285a.75.75 0 0 1-.75.715H6.5a3 3 0 1 0 0 6h11a3 3 0 1 0 0-6h-.256a.75.75 0 0 1-.749-.715A4.5 4.5 0 0 0 12 5.5M6.08 9.02a6.001 6.001 0 0 1 11.84 0A4.5 4.5 0 0 1 17.5 18h-11a4.5 4.5 0 0 1-.42-8.98");
}
</style><path class="mvm31wbdj"/>`,
		"fallback": "fluent:cloud-24-regular",
	});
}

export default Component;
