import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yts5iln8l.css';
import '../../css/d/d4f-gldbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yts5iln8l"/><path clip-rule="evenodd" class="d4f-gldbn"/>`,
		"fallback": "lucide-extended:book-a-filled",
	});
}

export default Component;
