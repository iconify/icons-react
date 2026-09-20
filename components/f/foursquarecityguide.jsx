import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jch9g5h6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jch9g5h6c"/>`,
		"fallback": "simple-icons:foursquarecityguide",
	});
}

export default Component;
