import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpok98bjd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpok98bjd"/>`,
		"fallback": "la:file-invoice-dollar",
	});
}

export default Component;
