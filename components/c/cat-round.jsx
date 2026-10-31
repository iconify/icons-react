import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm3fm8bds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm3fm8bds"/>`,
		"fallback": "coolicons:cat-round",
	});
}

export default Component;
