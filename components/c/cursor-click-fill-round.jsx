import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkdep1bai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkdep1bai"/>`,
		"fallback": "coolicons:cursor-click-fill-round",
	});
}

export default Component;
