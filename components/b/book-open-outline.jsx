import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvep-8bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvep-8bqk"/>`,
		"fallback": "eva:book-open-outline",
	});
}

export default Component;
