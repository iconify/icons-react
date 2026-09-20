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
		"content": `<style>.fmj246b7e {
  fill: currentColor;
  d: path("M3.616 20.192q-.691 0-1.153-.462T2 18.577V9.423h1v9.154q0 .23.192.423t.423.192H18.5v1zm3-3q-.691 0-1.153-.462T5 15.577V6.192h5.308V4.615q0-.69.462-1.152T11.923 3h3.154q.69 0 1.153.463t.462 1.152v1.577H22v9.385q0 .69-.462 1.153t-1.153.462zm0-1h13.769q.23 0 .423-.192t.192-.423V7.192H6v8.385q0 .23.192.423t.423.192m4.693-10h4.384V4.615q0-.23-.192-.423T15.077 4h-3.154q-.23 0-.423.192t-.192.423zM6 16.192v-9z");
}
</style><path class="fmj246b7e"/>`,
		"fallback": "material-symbols-light:cases-outline",
	});
}

export default Component;
