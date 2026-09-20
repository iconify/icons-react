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
		"content": `<style>.li67mhb2u {
  fill: currentColor;
  d: path("m10.95 17.62l-2.858-2.858l.72-.72l2.138 2.139l4.239-4.239l.719.72zM5.616 21q-.691 0-1.153-.462T4 19.385V6.615q0-.69.463-1.152T5.616 5h1.769V2.77h1.077V5h7.154V2.77h1V5h1.769q.69 0 1.153.463T20 6.616v12.769q0 .69-.462 1.153T18.384 21zm0-1h12.769q.23 0 .423-.192t.192-.424v-8.768H5v8.769q0 .23.192.423t.423.192");
}
</style><path class="li67mhb2u"/>`,
		"fallback": "material-symbols-light:event-available",
	});
}

export default Component;
