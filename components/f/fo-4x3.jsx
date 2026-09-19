import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti24kfb9v.css';
import '../../css/s/sx_geyq0r.css';
import '../../css/v/vn82uub4i.css';
import '../../css/a/akw58pb3k.css';
import '../../css/l/lo_2ujbjk.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGzrOc1cVe"><path class="ti24kfb9v"/></clipPath></defs><g clip-path="url(#SVGzrOc1cVe)" transform="translate(78 -32)" class="sx_geyq0r"><path class="vn82uub4i"/><path class="akw58pb3k"/><path class="lo_2ujbjk"/></g>`,
		"fallback": "flag:fo-4x3",
	});
}

export default Component;
