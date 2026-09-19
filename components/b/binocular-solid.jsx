import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi2996b1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gi2996b1y"/>`,
		"fallback": "basil:binocular-solid",
	});
}

export default Component;
