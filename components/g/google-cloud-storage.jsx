import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5-q460ma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5-q460ma"/>`,
		"fallback": "thesvg-color:google-cloud-storage",
	});
}

export default Component;
