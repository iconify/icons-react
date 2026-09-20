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
		"content": `<style>.yb3ol25ze {
  fill: currentColor;
  d: path("M14.5 23.5v-1h7v1zm3.5-3.212L14.712 17l.688-.688l2.1 2.1v-4.887h1v4.887l2.1-2.1l.688.688zM6.116 19.5q-.652 0-1.134-.482T4.5 17.884V4.116q0-.652.482-1.134T6.116 2.5H13L18.5 8v3.14h-6.384v8.36zm6.384-11h5l-5-5z");
}
</style><path class="yb3ol25ze"/>`,
		"fallback": "material-symbols-light:file-save",
	});
}

export default Component;
