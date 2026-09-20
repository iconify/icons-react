import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kymer5dgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kymer5dgl"/>`,
		"fallback": "mi:add",
	});
}

export default Component;
