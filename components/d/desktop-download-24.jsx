import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yovgyab1e.css';
import '../../css/x/x218cyb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yovgyab1e"/><path class="x218cyb3o"/>`,
		"fallback": "octicon:desktop-download-24",
	});
}

export default Component;
