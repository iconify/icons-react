import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6it9lmll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6it9lmll"/>`,
		"fallback": "andrsrxn:cellular-network-4g",
	});
}

export default Component;
