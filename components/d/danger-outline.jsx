import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqdm2xbfi.css';
import '../../css/p/prq9nybvi.css';
import '../../css/d/d71ngcbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqdm2xbfi"/><path class="prq9nybvi"/><path clip-rule="evenodd" class="d71ngcbgf"/>`,
		"fallback": "solar:danger-outline",
	});
}

export default Component;
