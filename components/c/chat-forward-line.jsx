import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfx6_cbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfx6_cbyy"/>`,
		"fallback": "ri:chat-forward-line",
	});
}

export default Component;
