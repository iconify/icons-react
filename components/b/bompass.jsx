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
		"content": `<style>.sfd2fvpyg {
  cx: 24.039px;
  cy: 23.76px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uncznvcae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.611 10.373v8.131l-7.057 4.1l.017-8.163zM15.389 34.977l4-6.928l.59 9.578l4-6.928");
}
</style><circle class="sfd2fvpyg"/><path class="uncznvcae"/>`,
		"fallback": "arcticons:bompass",
	});
}

export default Component;
