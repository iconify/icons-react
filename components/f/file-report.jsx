import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5d7qab8q.css';
import '../../css/j/j4nbmzbfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5d7qab8q"/><path class="j4nbmzbfo"/>`,
		"fallback": "boxicons:file-report",
	});
}

export default Component;
