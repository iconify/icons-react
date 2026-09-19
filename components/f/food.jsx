import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_72i1bsp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_72i1bsp"/>`,
		"fallback": "ep:food",
	});
}

export default Component;
