import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcfd24bwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcfd24bwb"/>`,
		"fallback": "noviair:contact-lock",
	});
}

export default Component;
