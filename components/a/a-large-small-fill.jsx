import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd42uxbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd42uxbxp"/>`,
		"fallback": "mingcute:a-large-small-fill",
	});
}

export default Component;
