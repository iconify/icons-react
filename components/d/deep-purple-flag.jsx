import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frpc10w6d.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frpc10w6d"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:deep-purple-flag",
	});
}

export default Component;
