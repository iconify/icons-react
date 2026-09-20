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
		"content": `<style>.ql0ghch6i {
  fill: currentColor;
  d: path("M8 3.5a4.5 4.5 0 1 1-4.455 5.14a.75.75 0 0 0-1.485.212A6.001 6.001 0 1 0 4 3.528V2.75a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5H4.646A4.5 4.5 0 0 1 8 3.5m.5 2.25a.75.75 0 0 0-1.5 0v2.5c0 .414.336.75.75.75h2a.75.75 0 0 0 0-1.5H8.5z");
}
</style><path class="ql0ghch6i"/>`,
		"fallback": "fluent:history-16-filled",
	});
}

export default Component;
