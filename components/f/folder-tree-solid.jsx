import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nur5fd4nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nur5fd4nj"/>`,
		"fallback": "iconaut:folder-tree-solid",
	});
}

export default Component;
