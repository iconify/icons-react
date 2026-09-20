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
		"content": `<style>.sstbuy4fj {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1h14.769q.23 0 .423-.192t.192-.424V8H4v9.385q0 .23.192.423t.423.192m6.335-2.18l-2.858-2.858l.72-.72l2.138 2.139l4.239-4.239l.719.72zM4.616 18H4V6h.616q-.231 0-.424.192T4 6.616v10.769q0 .23.192.423t.423.192");
}
</style><path class="sstbuy4fj"/>`,
		"fallback": "material-symbols-light:domain-verification-outline",
	});
}

export default Component;
