import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7bd_7bob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u7bd_7bob"/>`,
		"fallback": "griddy-icons:file-list-filled",
	});
}

export default Component;
