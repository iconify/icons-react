import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy0sp0bmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy0sp0bmg"/>`,
		"fallback": "mingcute:earth-longitude-line",
	});
}

export default Component;
