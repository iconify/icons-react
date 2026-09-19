import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpp35q0pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpp35q0pw"/>`,
		"fallback": "iconoir:apple-imac-2021-side",
	});
}

export default Component;
