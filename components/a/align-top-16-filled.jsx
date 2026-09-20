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
		"content": `<style>.anosfibnz {
  fill: currentColor;
  d: path("M1.5 2a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM2 5.75C2 4.784 2.784 4 3.75 4h1.5C6.216 4 7 4.784 7 5.75v6.5A1.75 1.75 0 0 1 5.25 14h-1.5A1.75 1.75 0 0 1 2 12.25zm7 0C9 4.784 9.784 4 10.75 4h1.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 12.25 12h-1.5A1.75 1.75 0 0 1 9 10.25z");
}
</style><path class="anosfibnz"/>`,
		"fallback": "fluent:align-top-16-filled",
	});
}

export default Component;
