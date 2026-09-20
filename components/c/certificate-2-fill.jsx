import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx5-cytsq.css';
import '../../css/f/fp4ye0bdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xx5-cytsq"/><path class="fp4ye0bdm"/>`,
		"fallback": "mingcute:certificate-2-fill",
	});
}

export default Component;
