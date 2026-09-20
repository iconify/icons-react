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
		"content": `<style>.e0xeifd6o {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2H8.45l1-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v5.175a4 4 0 0 0-1-.172zm7-.793V6.5a.5.5 0 0 0 .5.5h3.293zM5.649 18.68a.497.497 0 0 0 .707 0l3.814-3.814a2.85 2.85 0 1 0-4.031-4.031l-.136.136l-.137-.136a2.85 2.85 0 1 0-4.031 4.031z");
}
</style><path class="e0xeifd6o"/>`,
		"fallback": "fluent:document-heart-20-regular",
	});
}

export default Component;
