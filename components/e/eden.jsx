import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1sgz3j6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y1sgz3j6f"/>`,
		"fallback": "token:eden",
	});
}

export default Component;
