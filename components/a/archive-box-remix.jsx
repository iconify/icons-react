import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np4zpu2je.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="np4zpu2je"/>`,
		"fallback": "streamline:archive-box-remix",
	});
}

export default Component;
