import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joq9umt7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joq9umt7o"/>`,
		"fallback": "coolicons:database-check-corner-fill-round",
	});
}

export default Component;
