import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epmzw59au.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epmzw59au"/>`,
		"fallback": "iconoir:data-transfer-warning",
	});
}

export default Component;
