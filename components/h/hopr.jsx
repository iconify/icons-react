import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvaovg4de.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvaovg4de"/>`,
		"fallback": "token:hopr",
	});
}

export default Component;
