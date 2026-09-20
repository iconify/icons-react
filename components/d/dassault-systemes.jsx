import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruv4d3bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruv4d3bww"/>`,
		"fallback": "thesvg:dassault-systemes",
	});
}

export default Component;
