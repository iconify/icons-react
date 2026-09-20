import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8opnib-v.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8opnib-v"/>`,
		"fallback": "oi:briefcase",
	});
}

export default Component;
