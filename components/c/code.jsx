import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz3lbxnkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz3lbxnkd"/>`,
		"fallback": "hugeicons:code",
	});
}

export default Component;
