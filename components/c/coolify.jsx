import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfze6xbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfze6xbap"/>`,
		"fallback": "thesvg-color:coolify",
	});
}

export default Component;
