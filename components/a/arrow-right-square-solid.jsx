import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpih66b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpih66b8d"/>`,
		"fallback": "iconaut:arrow-right-square-solid",
	});
}

export default Component;
