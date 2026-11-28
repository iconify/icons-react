import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywgoy0b5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywgoy0b5n"/>`,
		"fallback": "iconaut:grill-solid",
	});
}

export default Component;
