import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhw9w1klx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhw9w1klx"/>`,
		"fallback": "vaadin:form",
	});
}

export default Component;
