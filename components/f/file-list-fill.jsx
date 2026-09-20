import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdzu280gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdzu280gs"/>`,
		"fallback": "ri:file-list-fill",
	});
}

export default Component;
