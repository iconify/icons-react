import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyc9-xbym.css';
import '../../css/u/uou3acccj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyc9-xbym"/><path class="uou3acccj"/>`,
		"fallback": "solar:chevron-first-bold",
	});
}

export default Component;
