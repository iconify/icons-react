import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn5y-x9jx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn5y-x9jx"/>`,
		"fallback": "noviair-light:fan",
	});
}

export default Component;
