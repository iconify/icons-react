import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozrvgq0-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozrvgq0-l"/>`,
		"fallback": "noviair-light:ghost",
	});
}

export default Component;
