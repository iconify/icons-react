import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqd4v7b6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqd4v7b6l"/>`,
		"fallback": "ci:arrow-sub-left-down",
	});
}

export default Component;
