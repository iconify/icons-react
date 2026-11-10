import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu_-1daos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu_-1daos"/>`,
		"fallback": "matita:epsilon",
	});
}

export default Component;
