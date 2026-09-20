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
		"content": `<style>.v85xl1b8q {
  fill: currentColor;
  d: path("M8 12.5h8q.214 0 .357-.143T16.5 12t-.143-.357T16 11.5H8q-.213 0-.357.143T7.5 12t.143.357T8 12.5M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="v85xl1b8q"/>`,
		"fallback": "material-symbols-light:indeterminate-check-box-rounded",
	});
}

export default Component;
