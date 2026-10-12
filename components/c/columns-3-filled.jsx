import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpl049buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpl049buj"/>`,
		"fallback": "lucide-extended:columns-3-filled",
	});
}

export default Component;
