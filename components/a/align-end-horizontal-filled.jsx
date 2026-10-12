import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb8v54b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb8v54b-f"/>`,
		"fallback": "lucide-extended:align-end-horizontal-filled",
	});
}

export default Component;
