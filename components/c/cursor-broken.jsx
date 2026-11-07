import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnn_g043v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnn_g043v"/>`,
		"fallback": "solar:cursor-broken",
	});
}

export default Component;
