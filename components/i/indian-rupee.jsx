import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gook-yb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gook-yb3z"/>`,
		"fallback": "vadivam:indian-rupee",
	});
}

export default Component;
