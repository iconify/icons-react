import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx9b0qf5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx9b0qf5y"/>`,
		"fallback": "iconoir:hdr",
	});
}

export default Component;
