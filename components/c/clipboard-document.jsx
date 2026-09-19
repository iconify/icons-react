import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o52br_tga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o52br_tga"/>`,
		"fallback": "heroicons-outline:clipboard-document",
	});
}

export default Component;
