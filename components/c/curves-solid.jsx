import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/raq402b1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="raq402b1c"/>`,
		"fallback": "iconaut:curves-solid",
	});
}

export default Component;
