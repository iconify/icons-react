import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv1hcrjrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv1hcrjrr"/>`,
		"fallback": "iconaut:gauge-circle-solid",
	});
}

export default Component;
