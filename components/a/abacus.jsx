import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umx1wmpnn.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umx1wmpnn"/>`,
		"fallback": "picon:abacus",
	});
}

export default Component;
