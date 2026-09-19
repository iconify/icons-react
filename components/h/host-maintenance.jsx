import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fno-s8bqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fno-s8bqa"/>`,
		"fallback": "grommet-icons:host-maintenance",
	});
}

export default Component;
