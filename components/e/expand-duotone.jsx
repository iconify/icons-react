import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1ardmbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary y1ardmbld"/>`,
		"fallback": "iconaut:expand-duotone",
	});
}

export default Component;
