import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqn5az9ja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqn5az9ja"/>`,
		"fallback": "mdi-light:gender-female",
	});
}

export default Component;
