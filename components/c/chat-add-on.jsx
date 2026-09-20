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
		"content": `<style>.yg1c9lbeb {
  fill: currentColor;
  d: path("M7.116 8.5h7.769v-1h-7.77zm0 4h4.769v-1h-4.77zm10.384 7v-3h-3v-1h3v-3h1v3h3v1h-3v3zm-14-.711V5.115q0-.667.475-1.141t1.14-.475h11.77q.666 0 1.14.475t.475 1.14v4.902q-.192-.011-.385-.014q-.192-.003-.384-.003q-2.39 0-4.06 1.672T12 15.73q0 .192.003.385q.003.192.014.384H5.79z");
}
</style><path class="yg1c9lbeb"/>`,
		"fallback": "material-symbols-light:chat-add-on",
	});
}

export default Component;
