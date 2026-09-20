import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y10q4sjml.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y10q4sjml"/>`,
		"fallback": "streamline-plump-color:bluetooth-flat",
	});
}

export default Component;
