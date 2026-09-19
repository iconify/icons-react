import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlvy82buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlvy82buf"/>`,
		"fallback": "bx:bxl-tumblr",
	});
}

export default Component;
