import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxv-nrbxk.css';
import '../../css/e/e03sdjqcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxv-nrbxk"/><path class="e03sdjqcb"/>`,
		"fallback": "bx:bxs-rename",
	});
}

export default Component;
