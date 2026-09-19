import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qruyi9g6m.css';
import '../../css/k/k9qv75bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qruyi9g6m"/><path class="k9qv75bnx"/>`,
		"fallback": "boxicons:cookie",
	});
}

export default Component;
