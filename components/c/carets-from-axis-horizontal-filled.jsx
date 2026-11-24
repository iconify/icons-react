import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls1c0037m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls1c0037m"/>`,
		"fallback": "lucide-extended:carets-from-axis-horizontal-filled",
	});
}

export default Component;
