import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/capct4svl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="capct4svl"/>`,
		"fallback": "iconaut:infinity-solid",
	});
}

export default Component;
