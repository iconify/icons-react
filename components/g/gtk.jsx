import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdt7b7_qx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdt7b7_qx"/>`,
		"fallback": "thesvg-color:gtk",
	});
}

export default Component;
