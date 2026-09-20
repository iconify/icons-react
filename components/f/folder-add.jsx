import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3p33cche.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3p33cche"/>`,
		"fallback": "lets-icons:folder-add",
	});
}

export default Component;
