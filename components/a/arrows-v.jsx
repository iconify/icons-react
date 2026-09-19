import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmn2svbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmn2svbpr"/>`,
		"fallback": "gg:arrows-v",
	});
}

export default Component;
