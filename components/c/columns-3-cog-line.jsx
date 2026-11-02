import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfisucboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfisucboa"/>`,
		"fallback": "mingcute:columns-3-cog-line",
	});
}

export default Component;
