import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvcjerb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvcjerb6c"/>`,
		"fallback": "noviair:folder-edit",
	});
}

export default Component;
