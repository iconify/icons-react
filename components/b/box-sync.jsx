import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws3eji2la.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws3eji2la"/>`,
		"fallback": "mdi:box-sync",
	});
}

export default Component;
