import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjly2peks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjly2peks"/>`,
		"fallback": "thesvg-color:claude",
	});
}

export default Component;
