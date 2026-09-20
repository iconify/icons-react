import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa8z4qbys.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa8z4qbys"/>`,
		"fallback": "jam:gps",
	});
}

export default Component;
