import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyu31v5md.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyu31v5md"/>`,
		"fallback": "andrsrxn:arrow-end",
	});
}

export default Component;
