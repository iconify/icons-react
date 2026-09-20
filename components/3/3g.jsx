import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwwh6z39s.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwwh6z39s"/>`,
		"fallback": "picon:3g",
	});
}

export default Component;
