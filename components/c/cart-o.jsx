import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zufra-4nx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zufra-4nx"/>`,
		"fallback": "vaadin:cart-o",
	});
}

export default Component;
