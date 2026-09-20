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
		"content": `<style>.svu91nwyx {
  fill: currentColor;
  d: path("M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25zm9.75 13.75h5.5c.69 0 1.25-.56 1.25-1.25v-5.5h-6.75zm-1.5-6.75H4.5v5.5c0 .69.56 1.25 1.25 1.25h5.5zm1.5-1.5h6.75v-5.5c0-.69-.56-1.25-1.25-1.25h-5.5zm-1.5-6.75h-5.5c-.69 0-1.25.56-1.25 1.25v5.5h6.75z");
}
</style><path class="svu91nwyx"/>`,
		"fallback": "fluent:border-all-24-regular",
	});
}

export default Component;
