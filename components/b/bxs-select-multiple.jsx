import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-_99-bnr.css';
import '../../css/l/l_u7c-bkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-_99-bnr"/><path class="l_u7c-bkz"/>`,
		"fallback": "bx:bxs-select-multiple",
	});
}

export default Component;
