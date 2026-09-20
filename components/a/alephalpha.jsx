import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfpqosb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfpqosb4z"/>`,
		"fallback": "thesvg:alephalpha",
	});
}

export default Component;
