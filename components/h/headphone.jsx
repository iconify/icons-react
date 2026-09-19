import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8-b8o18r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8-b8o18r"/>`,
		"fallback": "fe:headphone",
	});
}

export default Component;
