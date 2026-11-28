import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cymb9cbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cymb9cbzb"/>`,
		"fallback": "noviair:face-wink",
	});
}

export default Component;
