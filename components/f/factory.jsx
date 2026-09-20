import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zynt9nlma.css';
import '../../css/m/mp8j32oal.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zynt9nlma"/><path class="mp8j32oal"/>`,
		"fallback": "vaadin:factory",
	});
}

export default Component;
