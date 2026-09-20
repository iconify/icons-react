import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw379qbmo.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw379qbmo"/>`,
		"fallback": "picon:flight",
	});
}

export default Component;
