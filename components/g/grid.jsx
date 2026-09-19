import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in_je1b1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in_je1b1k"/>`,
		"fallback": "grommet-icons:grid",
	});
}

export default Component;
