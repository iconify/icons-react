import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt4_61_lr.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt4_61_lr"/>`,
		"fallback": "picon:chick",
	});
}

export default Component;
