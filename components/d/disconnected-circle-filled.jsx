import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn0n5kbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn0n5kbor"/>`,
		"fallback": "ix:disconnected-circle-filled",
	});
}

export default Component;
