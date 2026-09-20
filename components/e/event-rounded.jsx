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
		"content": `<style>.gwil71bqd {
  fill: currentColor;
  d: path("M13.389 17.38q-.62-.618-.62-1.495t.62-1.496t1.496-.62q.877 0 1.496.62T17 15.885t-.62 1.496t-1.495.619t-1.496-.62M5.616 21q-.691 0-1.153-.462T4 19.385V6.615q0-.69.463-1.152T5.616 5h1.769V3.308q0-.233.153-.386t.385-.153t.386.153t.153.386V5h7.154V3.27q0-.214.143-.358t.357-.143t.356.143t.144.357V5h1.769q.69 0 1.153.463T20 6.616v12.769q0 .69-.462 1.153T18.384 21zm0-1h12.769q.23 0 .423-.192t.192-.424v-8.768H5v8.769q0 .23.192.423t.423.192");
}
</style><path class="gwil71bqd"/>`,
		"fallback": "material-symbols-light:event-rounded",
	});
}

export default Component;
