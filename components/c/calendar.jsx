import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6p4noldf.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6p4noldf"/>`,
		"fallback": "fa-regular:calendar",
	});
}

export default Component;
