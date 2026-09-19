import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsohqs5pf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsohqs5pf"/>`,
		"fallback": "heroicons-outline:clipboard-list",
	});
}

export default Component;
