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
		"content": `<style>.fxa853btt {
  fill: currentColor;
  d: path("M20.871 18.046L7.85 5h1.427l2 2h8.108q.69 0 1.153.463T21 8.616v8.769q0 .179-.03.349q-.032.17-.099.312m-.069 4.177L17.579 19H4.616q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5H5l1.616 1.616H5.2L2.546 3.962l.708-.708l18.262 18.262z");
}
</style><path class="fxa853btt"/>`,
		"fallback": "material-symbols-light:folder-off",
	});
}

export default Component;
