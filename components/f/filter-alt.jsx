import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycuch81po.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycuch81po"/>`,
		"fallback": "lets-icons:filter-alt",
	});
}

export default Component;
