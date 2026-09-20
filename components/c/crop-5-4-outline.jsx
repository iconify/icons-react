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
		"content": `<style>.swv8zzbup {
  fill: currentColor;
  d: path("M5.616 19q-.691 0-1.153-.462T4 17.384V6.616q0-.691.463-1.153T5.616 5h12.769q.69 0 1.153.463T20 6.616v10.769q0 .69-.462 1.153T18.384 19zm0-1h12.769q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T18.384 6H5.616q-.231 0-.424.192T5 6.616v10.769q0 .23.192.423t.423.192M5 18V6z");
}
</style><path class="swv8zzbup"/>`,
		"fallback": "material-symbols-light:crop-5-4-outline",
	});
}

export default Component;
