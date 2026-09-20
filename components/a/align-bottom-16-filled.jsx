import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a202pe_at {
  fill: currentColor;
  d: path("M1.5 14a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1zm.5-3.75c0 .966.784 1.75 1.75 1.75h1.5A1.75 1.75 0 0 0 7 10.25v-6.5A1.75 1.75 0 0 0 5.25 2h-1.5A1.75 1.75 0 0 0 2 3.75zm7 0c0 .966.784 1.75 1.75 1.75h1.5A1.75 1.75 0 0 0 14 10.25v-4.5A1.75 1.75 0 0 0 12.25 4h-1.5A1.75 1.75 0 0 0 9 5.75z");
}
</style><path class="a202pe_at"/>`,
		"fallback": "fluent:align-bottom-16-filled",
	});
}

export default Component;
