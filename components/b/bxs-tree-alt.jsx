import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvpai4bwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvpai4bwp"/>`,
		"fallback": "bx:bxs-tree-alt",
	});
}

export default Component;
