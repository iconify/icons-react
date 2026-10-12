import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csm4l4bpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="csm4l4bpr"/>`,
		"fallback": "lucide-extended:archive-filled",
	});
}

export default Component;
