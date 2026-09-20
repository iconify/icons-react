import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qasjs_bsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qasjs_bsn"/>`,
		"fallback": "mingcute:hand-finger-2-line",
	});
}

export default Component;
