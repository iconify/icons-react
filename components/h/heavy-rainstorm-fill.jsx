import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xintgab2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xintgab2l"/>`,
		"fallback": "mingcute:heavy-rainstorm-fill",
	});
}

export default Component;
