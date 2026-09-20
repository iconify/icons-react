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
		"content": `<style>.mtkd9ebnn {
  fill: currentColor;
  d: path("M8 22V10.8L1.4 4.2l1.4-1.4l18.4 18.4l-1.4 1.4l-3.8-3.8V22zM6 3.15V2h12v3H7.85zm10 10L9.85 7H18v1l-2 3z");
}
</style><path class="mtkd9ebnn"/>`,
		"fallback": "material-symbols:flashlight-off",
	});
}

export default Component;
