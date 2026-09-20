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
		"content": `<style>.bl3ip1bzk {
  fill: currentColor;
  d: path("M8 22V11L6 8V2h12v6l-2 3v11zm2.938-6.937Q10.5 14.625 10.5 14t.438-1.062T12 12.5t1.063.438T13.5 14t-.437 1.063T12 15.5t-1.062-.437M8 5h8V4H8zm8 2H8v.4l2 3V20h4v-9.6l2-3zm-4 5");
}
</style><path class="bl3ip1bzk"/>`,
		"fallback": "material-symbols:flashlight-on-outline",
	});
}

export default Component;
