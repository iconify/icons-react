import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxu7n6der.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxu7n6der"/>`,
		"fallback": "mdi:folder-file",
	});
}

export default Component;
