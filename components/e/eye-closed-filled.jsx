import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftmluqmfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftmluqmfd"/>`,
		"fallback": "reicon:eye-closed-filled",
	});
}

export default Component;
