import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfb3x1bkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfb3x1bkl"/>`,
		"fallback": "mdi:database-sync",
	});
}

export default Component;
