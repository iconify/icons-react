import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd8kbrbyd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd8kbrbyd"/>`,
		"fallback": "garden:cloud-upload-26",
	});
}

export default Component;
