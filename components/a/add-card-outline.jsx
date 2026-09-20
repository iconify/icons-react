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
		"content": `<style>.x7-cw2h3b {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v4.576H4v6.193q0 .23.192.423t.423.192h8.577v1zM4 8.808h16V6.616q0-.231-.192-.424T19.385 6H4.615q-.23 0-.423.192T4 6.616zM19.5 21.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM4 18V6z");
}
</style><path class="x7-cw2h3b"/>`,
		"fallback": "material-symbols-light:add-card-outline",
	});
}

export default Component;
