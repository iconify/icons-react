import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebz0dxbmx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebz0dxbmx"/>`,
		"fallback": "ix:connector-hex-filled",
	});
}

export default Component;
