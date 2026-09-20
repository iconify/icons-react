import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inx9gng5o.css';
import '../../css/c/ct9663bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="inx9gng5o"/><path class="ct9663bfs"/>`,
		"fallback": "lets-icons:download-circle-fill",
	});
}

export default Component;
