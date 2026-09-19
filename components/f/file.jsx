import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzo4dpbfi.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzo4dpbfi"/>`,
		"fallback": "fa-solid:file",
	});
}

export default Component;
