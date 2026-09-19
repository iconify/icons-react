import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvx0x29yb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gvx0x29yb"/>`,
		"fallback": "cuida:caret-down-outline",
	});
}

export default Component;
