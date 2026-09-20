import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzf0gv1yw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzf0gv1yw"/>`,
		"fallback": "la:hands-helping-solid",
	});
}

export default Component;
