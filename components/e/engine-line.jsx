import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xaia0tblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xaia0tblb"/>`,
		"fallback": "mingcute:engine-line",
	});
}

export default Component;
