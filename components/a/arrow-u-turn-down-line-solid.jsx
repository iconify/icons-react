import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_a-9r90o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_a-9r90o"/>`,
		"fallback": "iconaut:arrow-u-turn-down-line-solid",
	});
}

export default Component;
