import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt-fu6bct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt-fu6bct"/>`,
		"fallback": "ri:collapse-horizontal-fill",
	});
}

export default Component;
