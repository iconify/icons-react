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
		"content": `<style>.td-6pli-v {
  fill: currentColor;
  d: path("M5 19V5.616q0-.667.475-1.141T6.615 4h10.77q.666 0 1.14.475T19 5.615V19h1.5q.213 0 .356.144t.144.357t-.144.356T20.5 20h-17q-.213 0-.356-.144T3 19.499t.144-.356T3.5 19zm5.75 0h2.5V5h-2.5z");
}
</style><path class="td-6pli-v"/>`,
		"fallback": "material-symbols-light:curtains-closed-rounded",
	});
}

export default Component;
