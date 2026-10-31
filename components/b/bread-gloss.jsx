import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykj6llbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykj6llbyj"/>`,
		"fallback": "withicons:bread-gloss",
	});
}

export default Component;
