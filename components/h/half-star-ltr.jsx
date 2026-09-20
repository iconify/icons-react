import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb86ohshj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb86ohshj"/>`,
		"fallback": "ooui:half-star-ltr",
	});
}

export default Component;
