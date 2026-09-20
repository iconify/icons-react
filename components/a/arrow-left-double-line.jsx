import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x47h9cg-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x47h9cg-u"/>`,
		"fallback": "ri:arrow-left-double-line",
	});
}

export default Component;
