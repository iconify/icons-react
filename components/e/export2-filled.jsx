import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgl5pmbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgl5pmbkr"/>`,
		"fallback": "reicon:export2-filled",
	});
}

export default Component;
