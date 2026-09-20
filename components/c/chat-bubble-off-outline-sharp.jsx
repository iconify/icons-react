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
		"content": `<style>.csmwtfm5t {
  fill: currentColor;
  d: path("M19.385 17v-1H20V4H6.85l-1-1H21v14zm.884 4.685L15.573 17H6.077L3 20.077V4.416L1.008 2.423l.707-.707l19.262 19.261zM4 5.415v12.431L5.846 16h8.738z");
}
</style><path class="csmwtfm5t"/>`,
		"fallback": "material-symbols-light:chat-bubble-off-outline-sharp",
	});
}

export default Component;
