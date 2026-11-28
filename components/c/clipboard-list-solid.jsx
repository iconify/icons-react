import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov6z5xbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov6z5xbgf"/>`,
		"fallback": "iconaut:clipboard-list-solid",
	});
}

export default Component;
