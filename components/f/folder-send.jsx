import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z411kfbwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z411kfbwa"/>`,
		"fallback": "lets-icons:folder-send",
	});
}

export default Component;
