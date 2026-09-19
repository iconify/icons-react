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
		"content": `<style>.ywt6bccyy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.333 17.833H24v12.334h12.333zM24 5.5H11.667v12.333H24zm0 12.333H11.667v12.334H24zm12.333 12.334H24V42.5h12.333z");
}
</style><path class="ywt6bccyy"/>`,
		"fallback": "arcticons:block-puzzle-guardian",
	});
}

export default Component;
