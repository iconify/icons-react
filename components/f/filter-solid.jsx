import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghen1wb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghen1wb1y"/>`,
		"fallback": "iconaut:filter-solid",
	});
}

export default Component;
