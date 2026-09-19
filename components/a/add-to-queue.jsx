import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoy6vkbrs.css';
import '../../css/l/lbf20db5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoy6vkbrs"/><path class="lbf20db5v"/>`,
		"fallback": "bx:add-to-queue",
	});
}

export default Component;
