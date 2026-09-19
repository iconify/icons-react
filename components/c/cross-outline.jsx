import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvnlcab3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvnlcab3u"/>`,
		"fallback": "basil:cross-outline",
	});
}

export default Component;
