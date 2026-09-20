import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqwpg6beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqwpg6beq"/>`,
		"fallback": "lucide:badge-alert",
	});
}

export default Component;
