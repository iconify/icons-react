import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hphjxbb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hphjxbb0k"/>`,
		"fallback": "noviair:binoculars",
	});
}

export default Component;
