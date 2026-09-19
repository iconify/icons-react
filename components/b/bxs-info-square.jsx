import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kydxuh2bw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kydxuh2bw"/>`,
		"fallback": "bx:bxs-info-square",
	});
}

export default Component;
