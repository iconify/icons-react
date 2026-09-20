import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1g_tcb2x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s1g_tcb2x"/>`,
		"fallback": "streamline:electric-cord-3-remix",
	});
}

export default Component;
