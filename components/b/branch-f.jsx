import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4mcjdb3s.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4mcjdb3s"/>`,
		"fallback": "jam:branch-f",
	});
}

export default Component;
