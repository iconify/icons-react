import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcbt8cctf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcbt8cctf"/>`,
		"fallback": "iconaut:focus-solid",
	});
}

export default Component;
