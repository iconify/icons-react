import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cstoc4c1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cstoc4c1z"/>`,
		"fallback": "iconaut:brackets-solid",
	});
}

export default Component;
