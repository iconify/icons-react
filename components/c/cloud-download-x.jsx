import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn9dj_esb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn9dj_esb"/>`,
		"fallback": "noviair:cloud-download-x",
	});
}

export default Component;
