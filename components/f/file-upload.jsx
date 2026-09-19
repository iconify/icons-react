import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el5c7fldi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="el5c7fldi"/>`,
		"fallback": "griddy-icons:file-upload",
	});
}

export default Component;
