import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo6egfo-a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo6egfo-a"/>`,
		"fallback": "vaadin:ellipsis-circle",
	});
}

export default Component;
