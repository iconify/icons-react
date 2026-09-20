import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxkizf0gp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxkizf0gp"/>`,
		"fallback": "mdi-light:content-save-all",
	});
}

export default Component;
