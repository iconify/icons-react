import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrn6mdb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrn6mdb2v"/>`,
		"fallback": "boxicons:greater-than-equal",
	});
}

export default Component;
