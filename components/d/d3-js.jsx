import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tij_f1buf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tij_f1buf"/>`,
		"fallback": "cib:d3-js",
	});
}

export default Component;
