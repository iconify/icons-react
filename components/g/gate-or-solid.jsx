import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqv-_cn3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqv-_cn3n"/>`,
		"fallback": "iconaut:gate-or-solid",
	});
}

export default Component;
