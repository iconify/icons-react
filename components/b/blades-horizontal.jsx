import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbw1l3b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbw1l3b7y"/>`,
		"fallback": "grommet-icons:blades-horizontal",
	});
}

export default Component;
