import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3u2rabta.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q3u2rabta"/>`,
		"fallback": "streamline:business-handshake-remix",
	});
}

export default Component;
