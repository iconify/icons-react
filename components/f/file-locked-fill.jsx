import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e63dy304p.css';
import '../../css/s/svi8x9byo.css';
import '../../css/c/cgkpg5bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e63dy304p"/><path class="svi8x9byo"/><path clip-rule="evenodd" class="cgkpg5bfs"/>`,
		"fallback": "mingcute:file-locked-fill",
	});
}

export default Component;
