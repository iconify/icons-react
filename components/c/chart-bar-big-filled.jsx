import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sozdzcb0a.css';
import '../../css/j/jehsd6t1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sozdzcb0a"/><path class="jehsd6t1o"/>`,
		"fallback": "lucide-extended:chart-bar-big-filled",
	});
}

export default Component;
