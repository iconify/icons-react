import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vve01yrsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vve01yrsk"/>`,
		"fallback": "thesvg-color:google-fonts",
	});
}

export default Component;
