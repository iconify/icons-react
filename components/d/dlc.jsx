import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3dt5cctf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b3dt5cctf"/>`,
		"fallback": "token:dlc",
	});
}

export default Component;
