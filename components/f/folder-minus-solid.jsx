import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gar376luf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gar376luf"/>`,
		"fallback": "iconaut:folder-minus-solid",
	});
}

export default Component;
