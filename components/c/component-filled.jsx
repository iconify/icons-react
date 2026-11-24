import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quw2mcr3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quw2mcr3e"/>`,
		"fallback": "lucide-extended:component-filled",
	});
}

export default Component;
