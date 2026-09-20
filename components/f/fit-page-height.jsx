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
		"content": `<style>.goscqlb8o {
  fill: currentColor;
  d: path("M6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h10.769q.69 0 1.153.463T19 4.616v14.769q0 .69-.462 1.153T17.384 21zM9.462 8.808h5.077L12 6.269zM12 17.73l2.539-2.539H9.46z");
}
</style><path class="goscqlb8o"/>`,
		"fallback": "material-symbols-light:fit-page-height",
	});
}

export default Component;
