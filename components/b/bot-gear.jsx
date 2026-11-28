import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxlqh4btd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxlqh4btd"/>`,
		"fallback": "noviair:bot-gear",
	});
}

export default Component;
