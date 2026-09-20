import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbdew6bcu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbdew6bcu"/>`,
		"fallback": "lsicon:file-csv-outline",
	});
}

export default Component;
