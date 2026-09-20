import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w80nyo8vn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w80nyo8vn"/>`,
		"fallback": "simple-icons:electronfiddle",
	});
}

export default Component;
