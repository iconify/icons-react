import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3ixh0b_b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l3ixh0b_b"/>`,
		"fallback": "streamline-flex:book-reading-remix",
	});
}

export default Component;
