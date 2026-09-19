import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drxyx7dbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drxyx7dbz"/>`,
		"fallback": "circum:bell-on",
	});
}

export default Component;
