import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmp0c2bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmp0c2bui"/>`,
		"fallback": "noviair-light:cookie",
	});
}

export default Component;
