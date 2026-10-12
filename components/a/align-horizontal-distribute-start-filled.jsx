import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foz5q4n-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foz5q4n-h"/>`,
		"fallback": "lucide-extended:align-horizontal-distribute-start-filled",
	});
}

export default Component;
