import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo4avb77y.css';

const viewBox = {"width":1024,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 1280) scale(1 -1)"><path class="bo4avb77y"/></g>`,
		"fallback": "fa:angle-double-down",
	});
}

export default Component;
