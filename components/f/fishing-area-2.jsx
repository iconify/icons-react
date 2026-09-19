import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qthw8xbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qthw8xbzt"/>`,
		"fallback": "guidance:fishing-area-2",
	});
}

export default Component;
