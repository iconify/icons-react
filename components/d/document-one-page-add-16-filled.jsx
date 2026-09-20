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
		"content": `<style>.fy2adybgs {
  fill: currentColor;
  d: path("M5 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2.257A5.5 5.5 0 0 1 13 6.207V3a2 2 0 0 0-2-2zm4.59 3.992L9.5 5h-3a.5.5 0 0 1-.09-.992L6.5 4h3a.5.5 0 0 1 .09.992M16 11.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12z");
}
</style><path class="fy2adybgs"/>`,
		"fallback": "fluent:document-one-page-add-16-filled",
	});
}

export default Component;
