import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp0mvq0pn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp0mvq0pn"/>`,
		"fallback": "grommet-icons:flows",
	});
}

export default Component;
