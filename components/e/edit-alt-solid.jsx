import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dap5e4boj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dap5e4boj"/>`,
		"fallback": "basil:edit-alt-solid",
	});
}

export default Component;
