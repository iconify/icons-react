import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufz89ibmb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufz89ibmb"/>`,
		"fallback": "pinhead:face-mask",
	});
}

export default Component;
