import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edvaug9pt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edvaug9pt"/>`,
		"fallback": "reicon:element-equal-filled",
	});
}

export default Component;
