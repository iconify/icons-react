import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftowa7x3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftowa7x3k"/>`,
		"fallback": "uil:file-graph",
	});
}

export default Component;
