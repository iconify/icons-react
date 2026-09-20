import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsv90912w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsv90912w"/>`,
		"fallback": "reicon:arrow-left-down-filled",
	});
}

export default Component;
