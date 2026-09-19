import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7k9jp1cl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7k9jp1cl"/>`,
		"fallback": "iconamoon:exit",
	});
}

export default Component;
