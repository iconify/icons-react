import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2tf88blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2tf88blk"/>`,
		"fallback": "thesvg:bluesound",
	});
}

export default Component;
