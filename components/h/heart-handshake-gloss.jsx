import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar4x5b1ec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar4x5b1ec"/>`,
		"fallback": "withicons:heart-handshake-gloss",
	});
}

export default Component;
