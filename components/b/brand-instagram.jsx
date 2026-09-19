import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo0-p2b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo0-p2b3j"/>`,
		"fallback": "humbleicons:brand-instagram",
	});
}

export default Component;
