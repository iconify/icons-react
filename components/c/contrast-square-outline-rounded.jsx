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
		"content": `<style>.q76k8bbhf {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.116-.048-.222q-.048-.105-.144-.202L5.192 18.808q.097.096.202.144t.222.048m2.673-9.827v1.558q0 .19.126.316t.316.126t.316-.126t.126-.316V9.173h1.558q.19 0 .316-.126t.126-.316t-.126-.316t-.316-.126H9.173V6.73q0-.19-.126-.316t-.316-.126t-.316.126t-.126.316v1.558H6.73q-.19 0-.316.126t-.126.316t.126.316t.316.126zm8.255 6.423h-3.5q-.19 0-.316-.126t-.126-.316t.126-.316t.316-.126h3.5q.19 0 .317.126t.126.316t-.126.316t-.317.126");
}
</style><path class="q76k8bbhf"/>`,
		"fallback": "material-symbols-light:contrast-square-outline-rounded",
	});
}

export default Component;
