import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6g_pnb0l.css';

const viewBox = {"width":1026,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6g_pnb0l"/>`,
		"fallback": "whh:compile",
	});
}

export default Component;
