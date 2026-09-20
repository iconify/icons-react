import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gof9z4p8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gof9z4p8q"/>`,
		"fallback": "mdi:hubspot",
	});
}

export default Component;
