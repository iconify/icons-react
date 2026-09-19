import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glp2bkbii.css';
import '../../css/m/mynrssntn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glp2bkbii"/><path class="mynrssntn"/>`,
		"fallback": "carbon:chat-bot",
	});
}

export default Component;
