import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6fpu11wf.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6fpu11wf"/>`,
		"fallback": "fa-solid:angle-double-left",
	});
}

export default Component;
