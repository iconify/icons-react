import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs4jkg62j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs4jkg62j"/>`,
		"fallback": "simple-icons:indieweb",
	});
}

export default Component;
