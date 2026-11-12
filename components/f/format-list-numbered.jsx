import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hjk15qw-b.css';
import '../../css/h/h7a1zyd8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hjk15qw-b"/><path class="h7a1zyd8n"/></g>`,
		"fallback": "wordpress:format-list-numbered",
	});
}

export default Component;
