import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxab2u_no.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxab2u_no"/>`,
		"fallback": "pixelarticons:badge-hd",
	});
}

export default Component;
