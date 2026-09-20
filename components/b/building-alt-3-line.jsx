import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmhlr2brq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmhlr2brq"/>`,
		"fallback": "si:building-alt-3-line",
	});
}

export default Component;
