import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc5f-1r2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc5f-1r2b"/>`,
		"fallback": "noviair:basket-heart",
	});
}

export default Component;
