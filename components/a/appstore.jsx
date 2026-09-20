import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-ub77t1y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-ub77t1y"/>`,
		"fallback": "uiw:appstore",
	});
}

export default Component;
