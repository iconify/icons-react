import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqdm2xbfi.css';
import '../../css/p/prq9nybvi.css';
import '../../css/g/g4e643m4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqdm2xbfi"/><path class="prq9nybvi"/><path clip-rule="evenodd" class="g4e643m4g"/>`,
		"fallback": "solar:danger-square-outline",
	});
}

export default Component;
