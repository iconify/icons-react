import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1i_g2pvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1i_g2pvj"/>`,
		"fallback": "thesvg-color:contentful",
	});
}

export default Component;
