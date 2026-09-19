import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on-1qbc1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on-1qbc1r"/>`,
		"fallback": "bx:bxs-plug",
	});
}

export default Component;
