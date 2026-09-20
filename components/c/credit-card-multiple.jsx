import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hff65g63h.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hff65g63h"/>`,
		"fallback": "lineicons:credit-card-multiple",
	});
}

export default Component;
