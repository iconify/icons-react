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
		"content": `<style>.smx72ro4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h7.4v37H5.5zm14.8 0h22.2v7.4H20.3zm0 14.8h22.2v7.4H20.3zm0 14.8h22.2v7.4H20.3z");
}
</style><path class="smx72ro4f"/>`,
		"fallback": "arcticons:esign",
	});
}

export default Component;
