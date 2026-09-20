import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdq7ct5jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdq7ct5jk"/>`,
		"fallback": "mdi:file-lock",
	});
}

export default Component;
