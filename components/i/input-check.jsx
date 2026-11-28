import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwd5ignwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwd5ignwi"/>`,
		"fallback": "noviair-light:input-check",
	});
}

export default Component;
