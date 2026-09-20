import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6o3xdrfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6o3xdrfz"/>`,
		"fallback": "mynaui:fat-corner-down-right",
	});
}

export default Component;
