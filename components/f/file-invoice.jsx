import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idnx1mbge.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idnx1mbge"/>`,
		"fallback": "fa7-solid:file-invoice",
	});
}

export default Component;
