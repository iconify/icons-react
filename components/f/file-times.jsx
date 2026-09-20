import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjab7rm6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjab7rm6j"/>`,
		"fallback": "uil:file-times",
	});
}

export default Component;
