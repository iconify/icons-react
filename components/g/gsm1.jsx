import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfs7vqiak.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfs7vqiak"/>`,
		"fallback": "picon:gsm1",
	});
}

export default Component;
