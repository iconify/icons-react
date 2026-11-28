import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5rzl_u5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5rzl_u5c"/>`,
		"fallback": "iconaut:coins-stack-solid",
	});
}

export default Component;
