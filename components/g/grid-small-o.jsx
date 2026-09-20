import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy7_qtwkz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy7_qtwkz"/>`,
		"fallback": "vaadin:grid-small-o",
	});
}

export default Component;
