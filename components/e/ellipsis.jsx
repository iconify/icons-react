import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_15mh_uj.css';

const viewBox = {"width":610,"height":700};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_15mh_uj"/>`,
		"fallback": "il:ellipsis",
	});
}

export default Component;
