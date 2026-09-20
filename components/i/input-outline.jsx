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
		"content": `<style>.ktqmhch8q {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V15.27h1v2.115q0 .231.192.424t.423.192h14.77q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T19.385 6H4.615q-.23 0-.423.192T4 6.616V8.73H3V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm7.269-3.577l-.708-.72l2.21-2.203H3v-1h10.387l-2.21-2.204l.708-.719L15.308 12z");
}
</style><path class="ktqmhch8q"/>`,
		"fallback": "material-symbols-light:input-outline",
	});
}

export default Component;
