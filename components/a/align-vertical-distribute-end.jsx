import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/koyvn77_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="koyvn77_g"/>`,
		"fallback": "hugeicons:align-vertical-distribute-end",
	});
}

export default Component;
