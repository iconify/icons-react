import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6np_ob6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6np_ob6k"/>`,
		"fallback": "mi:book",
	});
}

export default Component;
