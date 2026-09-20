import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy2pjbcso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy2pjbcso"/>`,
		"fallback": "mdi:cards-playing-diamond-multiple-outline",
	});
}

export default Component;
