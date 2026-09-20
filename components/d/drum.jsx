import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inq4aqb6r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inq4aqb6r"/>`,
		"fallback": "la:drum",
	});
}

export default Component;
