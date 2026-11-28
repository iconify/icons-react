import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf4s-cb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf4s-cb-u"/>`,
		"fallback": "noviair-light:file-text-edit",
	});
}

export default Component;
