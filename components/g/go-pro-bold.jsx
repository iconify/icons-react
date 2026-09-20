import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7blleqsn.css';
import '../../css/u/uj_xhacmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7blleqsn"/><path class="uj_xhacmc"/>`,
		"fallback": "streamline-ultimate:go-pro-bold",
	});
}

export default Component;
