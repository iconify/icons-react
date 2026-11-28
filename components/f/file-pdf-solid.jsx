import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni3q_32ln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni3q_32ln"/>`,
		"fallback": "iconaut:file-pdf-solid",
	});
}

export default Component;
