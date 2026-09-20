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
		"content": `<style>.hw1xmrmda {
  fill: currentColor;
  d: path("M9 21V10.692l-2-3V3h10v4.692l-2 3V21zm2.293-6.293Q11 14.413 11 14t.293-.707T12 13t.707.293T13 14t-.293.707T12 15t-.707-.293M8 5.5h8V4H8zm8 1H8v.9l2 3V20h4v-9.6l2-3zM12 12");
}
</style><path class="hw1xmrmda"/>`,
		"fallback": "material-symbols-light:flashlight-on-outline-sharp",
	});
}

export default Component;
