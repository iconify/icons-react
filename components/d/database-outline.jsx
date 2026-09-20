import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og0ik0mwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og0ik0mwp"/>`,
		"fallback": "mdi:database-outline",
	});
}

export default Component;
