import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxn1b1byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxn1b1byj"/>`,
		"fallback": "iconaut:arrow-down-long-solid",
	});
}

export default Component;
