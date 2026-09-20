import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ollgc0b6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ollgc0b6k"/>`,
		"fallback": "mingcute:fast-forward-fill",
	});
}

export default Component;
