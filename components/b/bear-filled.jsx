import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8yo2xlul.css';
import '../../css/w/wth0vybwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8yo2xlul"/><path class="wth0vybwk"/>`,
		"fallback": "boxicons:bear-filled",
	});
}

export default Component;
