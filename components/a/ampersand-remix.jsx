import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w16p4jb_q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w16p4jb_q"/>`,
		"fallback": "streamline:ampersand-remix",
	});
}

export default Component;
