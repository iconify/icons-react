import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjg93ebpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjg93ebpw"/>`,
		"fallback": "bx:bxs-up-arrow-alt",
	});
}

export default Component;
