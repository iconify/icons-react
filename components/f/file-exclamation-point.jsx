import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c59ji3bwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c59ji3bwf"/>`,
		"fallback": "lucide:file-exclamation-point",
	});
}

export default Component;
