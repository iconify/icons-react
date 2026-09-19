import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar_rbbh3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar_rbbh3x"/>`,
		"fallback": "heroicons:archive-box-arrow-down",
	});
}

export default Component;
