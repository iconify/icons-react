import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xatenq_en.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xatenq_en"/>`,
		"fallback": "mdi:chart-bell-curve",
	});
}

export default Component;
