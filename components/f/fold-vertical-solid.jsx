import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w08qh4blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w08qh4blk"/>`,
		"fallback": "iconaut:fold-vertical-solid",
	});
}

export default Component;
