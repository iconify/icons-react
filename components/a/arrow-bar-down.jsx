import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq7qwfd8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq7qwfd8c"/>`,
		"fallback": "tabler:arrow-bar-down",
	});
}

export default Component;
