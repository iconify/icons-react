import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssd_2ibyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssd_2ibyz"/>`,
		"fallback": "simple-icons:autodesk",
	});
}

export default Component;
