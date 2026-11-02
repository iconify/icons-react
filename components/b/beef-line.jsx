import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvr5zlrke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvr5zlrke"/>`,
		"fallback": "mingcute:beef-line",
	});
}

export default Component;
