import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5zh32dep.css';
import '../../css/t/t9ceisb5u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5zh32dep"/><path class="t9ceisb5u"/>`,
		"fallback": "vaadin:academy-cap",
	});
}

export default Component;
