import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kun0h_bmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kun0h_bmo"/>`,
		"fallback": "pixel:filter",
	});
}

export default Component;
