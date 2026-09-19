import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v439n2bfl.css';
import '../../css/d/dcra57g9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v439n2bfl"/><path class="dcra57g9k"/>`,
		"fallback": "bx:bxs-tennis-ball",
	});
}

export default Component;
