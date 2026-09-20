import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5qx8cb0r.css';
import '../../css/a/aycg7s_1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="h5qx8cb0r"/><path class="aycg7s_1n"/>`,
		"fallback": "uim:dribbble",
	});
}

export default Component;
