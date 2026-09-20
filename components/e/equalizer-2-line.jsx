import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-j23qbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-j23qbsa"/>`,
		"fallback": "ri:equalizer-2-line",
	});
}

export default Component;
