import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyq4pr93m.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyq4pr93m"/>`,
		"fallback": "whh:infosign",
	});
}

export default Component;
