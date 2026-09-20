import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvradw0gy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvradw0gy"/>`,
		"fallback": "thesvg:inquirer",
	});
}

export default Component;
