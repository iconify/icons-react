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
		"content": `<style>.hzf4_ub9k {
  fill: currentColor;
  d: path("M21 6.616v10.769q0 .69-.462 1.153T19.385 19H4.615q-.69 0-1.152-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616M4 8.808h16V6.616q0-.231-.192-.424T19.385 6H4.615q-.23 0-.423.192T4 6.616zm0 2.384v6.193q0 .23.192.423t.423.192h14.77q.23 0 .423-.192t.192-.423v-6.193zM4 18V6z");
}
</style><path class="hzf4_ub9k"/>`,
		"fallback": "material-symbols-light:credit-card-outline-rounded",
	});
}

export default Component;
