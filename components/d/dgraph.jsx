import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tumy6cd7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tumy6cd7i"/>`,
		"fallback": "thesvg:dgraph",
	});
}

export default Component;
