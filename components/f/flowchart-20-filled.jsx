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
		"content": `<style>.rmbzlbcpm {
  fill: currentColor;
  d: path("M3 4.5A1.5 1.5 0 0 1 4.5 3h2A1.5 1.5 0 0 1 8 4.5v2A1.5 1.5 0 0 1 6.5 8H6v3.84a1 1 0 0 1 .207.16L8 13.793q.094.095.16.207H12v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5V15H8.16a1 1 0 0 1-.16.207L6.207 17a1 1 0 0 1-1.414 0L3 15.207a1 1 0 0 1 0-1.414L4.793 12q.095-.095.207-.16V8h-.5A1.5 1.5 0 0 1 3 6.5z");
}
</style><path class="rmbzlbcpm"/>`,
		"fallback": "fluent:flowchart-20-filled",
	});
}

export default Component;
