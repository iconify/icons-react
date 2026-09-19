import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtxym15qt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtxym15qt"/>`,
		"fallback": "bx:down-arrow-alt",
	});
}

export default Component;
