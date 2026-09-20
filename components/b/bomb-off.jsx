import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcvwj0sdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcvwj0sdo"/>`,
		"fallback": "mdi:bomb-off",
	});
}

export default Component;
