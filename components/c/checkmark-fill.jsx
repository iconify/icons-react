import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz7du6xnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz7du6xnm"/>`,
		"fallback": "eva:checkmark-fill",
	});
}

export default Component;
