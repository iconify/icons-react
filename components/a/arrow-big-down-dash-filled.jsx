import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aha5mabrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aha5mabrl"/>`,
		"fallback": "lucide-extended:arrow-big-down-dash-filled",
	});
}

export default Component;
