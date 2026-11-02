import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wod75ccvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wod75ccvt"/>`,
		"fallback": "mingcute:file-headphone-fill",
	});
}

export default Component;
