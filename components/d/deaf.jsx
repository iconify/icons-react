import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv0l2nn3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv0l2nn3b"/>`,
		"fallback": "fontisto:deaf",
	});
}

export default Component;
