import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfpyk5bkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfpyk5bkr"/>`,
		"fallback": "coolicons:alarm-off-fill-round",
	});
}

export default Component;
