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
		"content": `<style>.vn7pt8bhp {
  fill: currentColor;
  d: path("M3.5 11a6.5 6.5 0 1 1 11.101 4.591a.75.75 0 1 0 1.062 1.06a8 8 0 1 0-11.326 0A.75.75 0 0 0 5.4 15.59A6.48 6.48 0 0 1 3.5 11m3 0a3.5 3.5 0 1 1 5.98 2.47a.75.75 0 1 0 1.062 1.06a5 5 0 1 0-7.083 0a.75.75 0 0 0 1.062-1.06A3.5 3.5 0 0 1 6.5 11M10 9a2 2 0 1 0 0 4a2 2 0 0 0 0-4");
}
</style><path class="vn7pt8bhp"/>`,
		"fallback": "fluent:communication-20-filled",
	});
}

export default Component;
