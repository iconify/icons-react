import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvdsm-bzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvdsm-bzc"/>`,
		"fallback": "ri:database-fill",
	});
}

export default Component;
