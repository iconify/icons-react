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
		"content": `<style>.tifx7m12b {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V15h1v3.385q0 .23.192.423t.423.192H9v1zM15 20v-1h3.385q.23 0 .423-.192t.192-.424V15h1v3.385q0 .69-.462 1.152T18.384 20zM4 9V5.616q0-.691.463-1.153T5.616 4H9v1H5.616q-.231 0-.424.192T5 5.616V9zm15 0V5.616q0-.231-.192-.424T18.384 5H15V4h3.385q.69 0 1.152.463T20 5.616V9z");
}
</style><path class="tifx7m12b"/>`,
		"fallback": "material-symbols-light:crop-free-outline",
	});
}

export default Component;
