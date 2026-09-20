import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivrd68bof.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivrd68bof"/>`,
		"fallback": "oui:controls-horizontal",
	});
}

export default Component;
