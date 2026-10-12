import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3u1wjb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c3u1wjb0v"/>`,
		"fallback": "lucide-extended:clipboard-list-filled",
	});
}

export default Component;
