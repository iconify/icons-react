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
		"content": `<style>.c3rvt5biw {
  fill: currentColor;
  d: path("M19.8 22.6L16 18.8V22H8V10.8L1.4 4.2l1.4-1.4l18.4 18.4zM10 20h4v-3.2l-4-4zm6-6.85l-2-2v-.75l2-3V7H9.85l-2-2H16V4H6.85L6 3.15V2h12v6l-2 3zm-3.575-3.575");
}
</style><path class="c3rvt5biw"/>`,
		"fallback": "material-symbols:flashlight-off-outline",
	});
}

export default Component;
