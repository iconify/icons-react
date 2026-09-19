import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3q1ylr4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3q1ylr4j"/>`,
		"fallback": "ci:grid-horizontal-round",
	});
}

export default Component;
