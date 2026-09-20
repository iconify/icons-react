import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs9p4d8nt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs9p4d8nt"/>`,
		"fallback": "thesvg:ikea",
	});
}

export default Component;
