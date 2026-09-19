import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dha5c7bcc.css';
import '../../css/b/b6slimcdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dha5c7bcc"/><path class="b6slimcdg"/></g>`,
		"fallback": "iconoir:book-stack",
	});
}

export default Component;
