import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aif5mxb-o.css';

const viewBox = {"width":344,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aif5mxb-o"/>`,
		"fallback": "zmdi:bug",
	});
}

export default Component;
