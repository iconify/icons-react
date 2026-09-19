import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i7-n2wb8m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.5 24C2.5 12.126 12.126 2.5 24 2.5V24zm43 0c0 11.874-9.626 21.5-21.5 21.5V24z");
}
</style><path class="i7-n2wb8m"/>`,
		"fallback": "arcticons:awds",
	});
}

export default Component;
