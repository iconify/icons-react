import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypov33b7e.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypov33b7e"/>`,
		"fallback": "picon:inbox",
	});
}

export default Component;
