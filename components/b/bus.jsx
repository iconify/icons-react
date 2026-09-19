import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le_guxbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="le_guxbxd"/>`,
		"fallback": "griddy-icons:bus",
	});
}

export default Component;
