import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pog5twk5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pog5twk5v"/>`,
		"fallback": "lets-icons:add-square-fill",
	});
}

export default Component;
