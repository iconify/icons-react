import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgi7aqbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgi7aqbpa"/>`,
		"fallback": "boxicons:caret-right-circle-filled",
	});
}

export default Component;
