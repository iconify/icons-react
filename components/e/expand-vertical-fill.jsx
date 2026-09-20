import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeo-4db_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeo-4db_k"/>`,
		"fallback": "ri:expand-vertical-fill",
	});
}

export default Component;
