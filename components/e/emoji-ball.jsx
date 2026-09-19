import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nls4zt4jj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nls4zt4jj"/>`,
		"fallback": "iconoir:emoji-ball",
	});
}

export default Component;
