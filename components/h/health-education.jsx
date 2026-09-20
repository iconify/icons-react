import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6mhhybdk.css';

const viewBox = {"width":65,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6mhhybdk"/>`,
		"fallback": "medical-icon:health-education",
	});
}

export default Component;
