import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh1y5yg1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh1y5yg1q"/>`,
		"fallback": "simple-icons:adobedreamweaver",
	});
}

export default Component;
