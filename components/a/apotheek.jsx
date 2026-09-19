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
		"content": `<style>.yroeg1bkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.626 10.432a8.697 8.697 0 1 0 0 17.395zm2.504 29.709c6.043 0 10.942-4.899 10.942-10.942S30.173 18.257 24.13 18.257zm0-25.699a5.471 5.471 0 1 0 0-10.942zm-2.504 18.274a5.892 5.892 0 0 0 0 11.784z");
}
</style><path class="yroeg1bkz"/>`,
		"fallback": "arcticons:apotheek",
	});
}

export default Component;
