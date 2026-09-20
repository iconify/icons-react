import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc0pt313m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc0pt313m"/>`,
		"fallback": "vaadin:esc",
	});
}

export default Component;
