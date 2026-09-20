import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9ao3ccxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9ao3ccxl"/>`,
		"fallback": "thesvg-color:google-password-manager",
	});
}

export default Component;
