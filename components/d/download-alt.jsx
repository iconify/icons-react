import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6brtmb2k.css';
import '../../css/p/p-2h8ebhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6brtmb2k"/><path class="p-2h8ebhs"/>`,
		"fallback": "uim:download-alt",
	});
}

export default Component;
