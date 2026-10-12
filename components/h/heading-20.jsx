import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iydi5xvdm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iydi5xvdm"/>`,
		"fallback": "garden:heading-20",
	});
}

export default Component;
