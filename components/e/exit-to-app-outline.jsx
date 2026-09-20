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
		"content": `<style>.u8z7f_zfw {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V15.27h1v3.115q0 .231.192.424t.423.192h12.77q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616V8.73H4V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm5.23-4.077l-.707-.72l2.703-2.703H4v-1h8.842L10.14 8.796l.707-.719L14.77 12z");
}
</style><path class="u8z7f_zfw"/>`,
		"fallback": "material-symbols-light:exit-to-app-outline",
	});
}

export default Component;
