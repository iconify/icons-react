import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzgw9y50r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzgw9y50r"/>`,
		"fallback": "tdesign:filter-sort-filled",
	});
}

export default Component;
