import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1c6mcb8b.css';
import '../../css/f/fypyp2bjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1c6mcb8b"/><path class="fypyp2bjx"/>`,
		"fallback": "streamline-freehand:data-transfer-document-module",
	});
}

export default Component;
