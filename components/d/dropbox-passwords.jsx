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
		"content": `<style>.c3f-hsbol {
  cx: 24px;
  cy: 24px;
  r: 7px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.kmu5hfb4u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 17c-3.9 0-7 3.1-7 7s3.1 7 7 7v7.5c0 2.2-1.8 4-4 4h-29c-2.2 0-4-1.8-4-4V31c3.9 0 7-3.1 7-7s-3.1-7-7-7V9.5c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4zM24 17V5.5M24 31v11.5");
}
</style><circle class="c3f-hsbol"/><path class="kmu5hfb4u"/>`,
		"fallback": "arcticons:dropbox-passwords",
	});
}

export default Component;
