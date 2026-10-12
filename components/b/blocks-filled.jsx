import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys7-5437z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys7-5437z"/>`,
		"fallback": "lucide-extended:blocks-filled",
	});
}

export default Component;
