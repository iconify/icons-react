import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl0kpm0-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl0kpm0-y"/>`,
		"fallback": "mdi:arrow-right-bold-circle",
	});
}

export default Component;
