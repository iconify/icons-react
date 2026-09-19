import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxf1odf7b.css';
import '../../css/s/sgoebkv5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxf1odf7b"/><path class="sgoebkv5i"/>`,
		"fallback": "boxicons:arrow-out-left-square-half-filled",
	});
}

export default Component;
