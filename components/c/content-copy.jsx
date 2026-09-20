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
		"content": `<style>.o7pn7abgr {
  fill: currentColor;
  d: path("M9.116 17q-.691 0-1.153-.462T7.5 15.385V4.615q0-.69.463-1.153T9.116 3h7.769q.69 0 1.153.462t.462 1.153v10.77q0 .69-.462 1.152T16.884 17zm-3 3q-.691 0-1.153-.462T4.5 18.385V6.615h1v11.77q0 .23.192.423t.423.192h8.77v1z");
}
</style><path class="o7pn7abgr"/>`,
		"fallback": "material-symbols-light:content-copy",
	});
}

export default Component;
