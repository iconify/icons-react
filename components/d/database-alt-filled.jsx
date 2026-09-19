import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov3qt0kxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ov3qt0kxf"/>`,
		"fallback": "griddy-icons:database-alt-filled",
	});
}

export default Component;
