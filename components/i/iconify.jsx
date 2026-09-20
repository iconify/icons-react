import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n00ht3k3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n00ht3k3q"/>`,
		"fallback": "thesvg-color:iconify",
	});
}

export default Component;
