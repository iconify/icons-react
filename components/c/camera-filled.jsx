import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s07htpbtb.css';
import '../../css/c/cdmk0wbri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s07htpbtb"/><path class="cdmk0wbri"/>`,
		"fallback": "boxicons:camera-filled",
	});
}

export default Component;
