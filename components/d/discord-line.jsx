import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzp3mo5ci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzp3mo5ci"/>`,
		"fallback": "mingcute:discord-line",
	});
}

export default Component;
