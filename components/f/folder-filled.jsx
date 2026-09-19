import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u159h1bml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u159h1bml"/>`,
		"fallback": "griddy-icons:folder-filled",
	});
}

export default Component;
