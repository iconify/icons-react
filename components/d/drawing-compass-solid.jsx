import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htvyfdo4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="htvyfdo4z"/>`,
		"fallback": "streamline-sharp:drawing-compass-solid",
	});
}

export default Component;
