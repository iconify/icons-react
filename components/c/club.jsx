import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1td-_zdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1td-_zdd"/>`,
		"fallback": "boxicons:club",
	});
}

export default Component;
