import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilyhpi0vo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilyhpi0vo"/>`,
		"fallback": "qlementine-icons:flip-horizontal-16",
	});
}

export default Component;
