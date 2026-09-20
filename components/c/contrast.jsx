import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htqo9-sqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htqo9-sqt"/>`,
		"fallback": "mdi:contrast",
	});
}

export default Component;
