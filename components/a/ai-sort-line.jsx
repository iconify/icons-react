import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b55gmjb6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b55gmjb6z"/>`,
		"fallback": "si:ai-sort-line",
	});
}

export default Component;
