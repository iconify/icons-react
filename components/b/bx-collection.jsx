import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywv_nqt8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywv_nqt8m"/>`,
		"fallback": "bx:bx-collection",
	});
}

export default Component;
