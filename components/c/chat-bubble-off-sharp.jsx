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
		"content": `<style>.k9ru-7bni {
  fill: currentColor;
  d: path("M19.7 16.966L5.85 3H21v13.966zm.57 4.719L15.572 17H6.077L3 20.077V4.416L1.008 2.423l.707-.707l19.262 19.261z");
}
</style><path class="k9ru-7bni"/>`,
		"fallback": "material-symbols-light:chat-bubble-off-sharp",
	});
}

export default Component;
