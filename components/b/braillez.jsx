import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcd5q2yhd.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcd5q2yhd"/>`,
		"fallback": "whh:braillez",
	});
}

export default Component;
