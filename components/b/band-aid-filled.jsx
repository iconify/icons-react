import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvnxf2gox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvnxf2gox"/>`,
		"fallback": "boxicons:band-aid-filled",
	});
}

export default Component;
