import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmwmrlbte.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tmwmrlbte"/>`,
		"fallback": "streamline-plump-color:fingerprint-2-flat",
	});
}

export default Component;
