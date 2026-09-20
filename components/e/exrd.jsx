import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4m1lwmql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4m1lwmql"/>`,
		"fallback": "token:exrd",
	});
}

export default Component;
