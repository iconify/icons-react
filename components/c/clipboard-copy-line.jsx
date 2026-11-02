import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-3o2v47x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-3o2v47x"/>`,
		"fallback": "mingcute:clipboard-copy-line",
	});
}

export default Component;
