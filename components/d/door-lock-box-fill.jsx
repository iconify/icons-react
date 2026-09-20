import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5k2us3qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5k2us3qi"/>`,
		"fallback": "ri:door-lock-box-fill",
	});
}

export default Component;
