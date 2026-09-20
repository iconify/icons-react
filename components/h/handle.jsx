import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnz4v1b6q.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnz4v1b6q"/>`,
		"fallback": "picon:handle",
	});
}

export default Component;
