import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob3y1iinc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob3y1iinc"/>`,
		"fallback": "vaadin:ellipsis-v",
	});
}

export default Component;
