import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izg17ge-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izg17ge-j"/>`,
		"fallback": "iconaut:directions-solid",
	});
}

export default Component;
