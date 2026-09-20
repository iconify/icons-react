import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wct_gyo-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wct_gyo-u"/>`,
		"fallback": "reicon:confetti2-filled",
	});
}

export default Component;
