import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do3v0r02q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do3v0r02q"/>`,
		"fallback": "heroicons-outline:globe-alt",
	});
}

export default Component;
