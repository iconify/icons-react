import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zep9gyb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zep9gyb4x"/>`,
		"fallback": "mynaui:arrow-down-left-square-solid",
	});
}

export default Component;
