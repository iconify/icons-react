import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbknc0bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jbknc0bfd"/>`,
		"fallback": "iconoir:euro-square-solid",
	});
}

export default Component;
