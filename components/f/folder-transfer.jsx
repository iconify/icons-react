import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ieuaz4n3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ieuaz4n3q"/>`,
		"fallback": "hugeicons:folder-transfer",
	});
}

export default Component;
