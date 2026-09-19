import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8_qo0hez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8_qo0hez"/>`,
		"fallback": "iconoir:delete-circled-outline",
	});
}

export default Component;
