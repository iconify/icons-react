import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kilb8ccom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kilb8ccom"/>`,
		"fallback": "noviair:file-zip-lock",
	});
}

export default Component;
