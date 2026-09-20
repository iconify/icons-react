import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grwh7o55x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grwh7o55x"/>`,
		"fallback": "vaadin:chevron-circle-right",
	});
}

export default Component;
