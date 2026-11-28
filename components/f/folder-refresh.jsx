import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfqz4bcsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfqz4bcsd"/>`,
		"fallback": "noviair:folder-refresh",
	});
}

export default Component;
