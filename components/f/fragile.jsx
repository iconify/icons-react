import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nae5ahbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nae5ahbak"/>`,
		"fallback": "guidance:fragile",
	});
}

export default Component;
