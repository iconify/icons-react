import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvqvjzb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvqvjzb3y"/>`,
		"fallback": "si:file-upload-duotone",
	});
}

export default Component;
