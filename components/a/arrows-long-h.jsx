import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd9qbabfk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd9qbabfk"/>`,
		"fallback": "vaadin:arrows-long-h",
	});
}

export default Component;
