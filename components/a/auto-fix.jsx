import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_7lbfhyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_7lbfhyx"/>`,
		"fallback": "mdi:auto-fix",
	});
}

export default Component;
