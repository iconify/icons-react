import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_u455h9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_u455h9j primary"/>`,
		"fallback": "iconaut:cloud-duotone",
	});
}

export default Component;
