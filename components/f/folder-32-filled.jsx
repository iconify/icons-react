import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r6z1udgty {
  fill: currentColor;
  d: path("M2 8.5A4.5 4.5 0 0 1 6.5 4h3.964a3.5 3.5 0 0 1 2.475 1.025L15 7.085l-3.475 3.476a1.5 1.5 0 0 1-1.06.439H2zM2 13v10.5A4.5 4.5 0 0 0 6.5 28h19a4.5 4.5 0 0 0 4.5-4.5V12a4.5 4.5 0 0 0-4.5-4.5h-8.086l-4.475 4.475A3.5 3.5 0 0 1 10.464 13z");
}
</style><path class="r6z1udgty"/>`,
		"fallback": "fluent:folder-32-filled",
	});
}

export default Component;
