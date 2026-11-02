import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg2gc29iw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg2gc29iw"/>`,
		"fallback": "mingcute:folder-tree-line",
	});
}

export default Component;
