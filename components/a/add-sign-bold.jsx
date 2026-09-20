import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3t19-9ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v3t19-9ky"/>`,
		"fallback": "streamline-freehand:add-sign-bold",
	});
}

export default Component;
