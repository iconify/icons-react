import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrc_subuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrc_subuv"/>`,
		"fallback": "bx:bx-bug",
	});
}

export default Component;
