import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3o0hc51j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3o0hc51j"/>`,
		"fallback": "mingcute:bed-fill",
	});
}

export default Component;
