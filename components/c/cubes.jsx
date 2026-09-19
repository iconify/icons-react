import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5xks9b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5xks9b-h"/>`,
		"fallback": "grommet-icons:cubes",
	});
}

export default Component;
