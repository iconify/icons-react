import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oflqh5b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oflqh5b_n"/>`,
		"fallback": "griddy-icons:c",
	});
}

export default Component;
