import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hg4vu5brw {
  fill: currentColor;
  d: path("M14.75 2.75a.75.75 0 0 0-1.5 0v1.496a.75.75 0 0 0 1.5 0zM20 14a6 6 0 1 1-12 0a6 6 0 0 1 12 0m-1.5 0A4.5 4.5 0 0 0 14 9.5v9a4.5 4.5 0 0 0 4.5-4.5m7.5 0a.75.75 0 0 1-.75.75h-1.497a.75.75 0 0 1 0-1.5h1.496A.75.75 0 0 1 26 14m-11.25 9.754a.75.75 0 0 0-1.5 0v1.496a.75.75 0 0 0 1.5 0zM5 14a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 14m1.28-8.781a.75.75 0 1 0-1.061 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06zm-1.061 17.56a.75.75 0 0 0 1.06 0l1.5-1.5a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06m16.5-17.56a.75.75 0 1 1 1.06 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06zm1.06 17.56a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 1 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06");
}
</style><path class="hg4vu5brw"/>`,
		"fallback": "fluent:brightness-high-28-filled",
	});
}

export default Component;
