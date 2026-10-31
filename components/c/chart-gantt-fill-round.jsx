import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0ds38bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0ds38bra"/>`,
		"fallback": "coolicons:chart-gantt-fill-round",
	});
}

export default Component;
