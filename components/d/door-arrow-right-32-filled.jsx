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
		"content": `<style>.tz9pzddwx {
  fill: currentColor;
  d: path("M23.5 16a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15m.25-14A3.25 3.25 0 0 1 27 5.25v9.955a9 9 0 0 0-3.5-.705A9 9 0 0 0 17.278 30H8.25a3.25 3.25 0 0 1-3.246-3.083L5 26.75V5.25A3.25 3.25 0 0 1 8.25 2zm1.03 16.72a.75.75 0 1 0-1.06 1.06l2.72 2.72h-7.69a.75.75 0 0 0 0 1.5h7.69l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06zM10.5 13.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5");
}
</style><path class="tz9pzddwx"/>`,
		"fallback": "fluent:door-arrow-right-32-filled",
	});
}

export default Component;
