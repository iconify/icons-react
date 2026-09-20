import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnucjk.css';
import '../../css/x/xwdvrd.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-ssqjbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnucjk"/><path class="xwdvrd"/>`,
		"fallback": "line-md:chat-round",
	});
}

export default Component;
