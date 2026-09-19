import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrav_bckm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrav_bckm"/>`,
		"fallback": "guidance:home",
	});
}

export default Component;
