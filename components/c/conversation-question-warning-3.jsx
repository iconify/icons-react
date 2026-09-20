import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij9jytbwz.css';
import '../../css/r/rk9vncbpu.css';
import '../../css/w/wswcn9beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij9jytbwz"/><path class="rk9vncbpu"/><path class="wswcn9beg"/>`,
		"fallback": "streamline-freehand:conversation-question-warning-3",
	});
}

export default Component;
