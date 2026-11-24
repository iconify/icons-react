import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq7fbvbpx.css';
import '../../css/p/pj3mk0brx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq7fbvbpx"/><path class="pj3mk0brx"/>`,
		"fallback": "lucide-extended:file-pen-filled",
	});
}

export default Component;
