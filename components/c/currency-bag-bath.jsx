import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-txjnb-q.css';
import '../../css/g/g13_2rbsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-txjnb-q"/><path class="g13_2rbsd"/>`,
		"fallback": "streamline-freehand:currency-bag-bath",
	});
}

export default Component;
