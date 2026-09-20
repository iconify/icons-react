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
		"content": `<style>.lvl736j0l {
  fill: currentColor;
  d: path("M6.77 11.116V6.769h4.346v4.347zm0 6.115v-4.347h4.346v4.347zm6.115-6.116V6.77h4.346v4.347zm0 6.116v-4.347h4.346v4.347zM5.615 20q-.69 0-1.152-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.77q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192");
}
</style><path class="lvl736j0l"/>`,
		"fallback": "material-symbols-light:cards",
	});
}

export default Component;
