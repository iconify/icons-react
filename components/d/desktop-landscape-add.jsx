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
		"content": `<style>.a1p0f7rdr {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v6.37q-.554-.297-1.182-.45q-.628-.151-1.312-.151q-.237 0-.458.012t-.433.063V8.385H9v.884h7.73v3.416q-.54.18-1.008.456t-.876.634v-2.621H6.385v4.462h7.119q-.252.513-.378 1.083T13 17.89q0 .294.027.57t.106.54zM18 21v-2.616h-2.615v-1H18V14.77h1v2.615h2.616v1H19V21z");
}
</style><path class="a1p0f7rdr"/>`,
		"fallback": "material-symbols-light:desktop-landscape-add",
	});
}

export default Component;
