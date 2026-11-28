import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huory3bmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huory3bmp"/>`,
		"fallback": "iconaut:flag-solid",
	});
}

export default Component;
