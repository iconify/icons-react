import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccc8p6bbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccc8p6bbs"/>`,
		"fallback": "noviair:drill-check",
	});
}

export default Component;
