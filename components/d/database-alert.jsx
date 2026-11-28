import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoydhk-ol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoydhk-ol"/>`,
		"fallback": "noviair-light:database-alert",
	});
}

export default Component;
