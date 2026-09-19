import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azy9twppz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azy9twppz"/>`,
		"fallback": "griddy-icons:connectivity-tenancy-filled",
	});
}

export default Component;
