import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnr7gmnxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnr7gmnxf"/>`,
		"fallback": "mingcute:briefcase-fill",
	});
}

export default Component;
