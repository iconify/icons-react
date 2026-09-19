import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1r9nnbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1r9nnbwt"/>`,
		"fallback": "heroicons-outline:folder-plus",
	});
}

export default Component;
