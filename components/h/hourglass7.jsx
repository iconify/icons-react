import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo8ctyb6r.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo8ctyb6r"/>`,
		"fallback": "picon:hourglass7",
	});
}

export default Component;
