import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlgfe8brk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dlgfe8brk"/>`,
		"fallback": "ix:folder-tag",
	});
}

export default Component;
