import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1b4hxe1k.css';
import '../../css/i/inq217r_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1b4hxe1k"/><path class="inq217r_i"/>`,
		"fallback": "bx:bxs-crop",
	});
}

export default Component;
