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
		"content": `<style>.olulcbbnq {
  fill: currentColor;
  d: path("M3 4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 6zM4 9h16v8.25A3.75 3.75 0 0 1 16.25 21h-8.5A3.75 3.75 0 0 1 4 17.25zm6.25 2a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="olulcbbnq"/>`,
		"fallback": "fluent:archive-24-filled",
	});
}

export default Component;
