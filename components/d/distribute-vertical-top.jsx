import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js7hp717e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js7hp717e"/>`,
		"fallback": "mdi:distribute-vertical-top",
	});
}

export default Component;
