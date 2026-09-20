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
		"content": `<style>.ntf918b_n {
  fill: currentColor;
  d: path("M20 20V4zM5.615 20H13.5V4H5.616q-.691 0-1.153.463T4 5.616v12.769q0 .69.463 1.153T5.616 20M20 18.384V5.616q0-.691-.462-1.153T18.384 4H14.5v16h3.885q.69 0 1.152-.462T20 18.385");
}
</style><path class="ntf918b_n"/>`,
		"fallback": "material-symbols-light:grid-layout-side",
	});
}

export default Component;
