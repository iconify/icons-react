import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyxr4_bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyxr4_bcp"/>`,
		"fallback": "uis:align-letter-right",
	});
}

export default Component;
