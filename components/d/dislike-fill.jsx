import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqs2gk55e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oqs2gk55e"/>`,
		"fallback": "iconamoon:dislike-fill",
	});
}

export default Component;
