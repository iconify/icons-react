import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bazxsibde.css';
import '../../css/l/lidjc4bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bazxsibde"/><path class="lidjc4bcc"/>`,
		"fallback": "boxicons:history",
	});
}

export default Component;
