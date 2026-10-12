import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc0h-ybnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc0h-ybnv"/>`,
		"fallback": "lucide-extended:arrow-big-left-dash-filled",
	});
}

export default Component;
