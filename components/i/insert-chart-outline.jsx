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
		"content": `<style>.duerwpblf {
  fill: currentColor;
  d: path("M7.73 16.5h1v-6h-1zm3.77 0h1v-9h-1zm3.77 0h1v-3h-1zM5.615 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192M5 5v14z");
}
</style><path class="duerwpblf"/>`,
		"fallback": "material-symbols-light:insert-chart-outline",
	});
}

export default Component;
