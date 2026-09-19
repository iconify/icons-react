import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxnkqj4fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxnkqj4fu"/>`,
		"fallback": "griddy-icons:file",
	});
}

export default Component;
