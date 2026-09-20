import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcovqmb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcovqmb8r"/>`,
		"fallback": "thesvg-color:circleci-dark",
	});
}

export default Component;
