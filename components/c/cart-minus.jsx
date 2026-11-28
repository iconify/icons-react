import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy7w55bbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy7w55bbn"/>`,
		"fallback": "noviair-light:cart-minus",
	});
}

export default Component;
