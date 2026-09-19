import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av29ckbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av29ckbtg"/>`,
		"fallback": "bx:bxs-memory-card",
	});
}

export default Component;
