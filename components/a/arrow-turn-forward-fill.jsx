import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikp3ozb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikp3ozb_g"/>`,
		"fallback": "ri:arrow-turn-forward-fill",
	});
}

export default Component;
