import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj89p6enm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yj89p6enm"/>`,
		"fallback": "heroicons:code-bracket-square-solid",
	});
}

export default Component;
