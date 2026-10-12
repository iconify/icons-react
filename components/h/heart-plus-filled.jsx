import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1coifbia.css';
import '../../css/s/s6d7cubjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1coifbia"/><path class="s6d7cubjn"/>`,
		"fallback": "lucide-extended:heart-plus-filled",
	});
}

export default Component;
