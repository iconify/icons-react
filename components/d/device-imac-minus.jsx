import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw6l6rbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw6l6rbqf"/>`,
		"fallback": "tabler:device-imac-minus",
	});
}

export default Component;
