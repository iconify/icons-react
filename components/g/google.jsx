import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddiu6ubuw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddiu6ubuw"/>`,
		"fallback": "picon:google",
	});
}

export default Component;
