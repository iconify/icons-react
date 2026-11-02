import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqau3ebwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqau3ebwk"/>`,
		"fallback": "mingcute:grid-line",
	});
}

export default Component;
