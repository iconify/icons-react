import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hti6wubho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hti6wubho"/>`,
		"fallback": "mingcute:injection-fill",
	});
}

export default Component;
