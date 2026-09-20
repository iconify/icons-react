import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-56_ib6r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-56_ib6r"/>`,
		"fallback": "vaadin:download-alt",
	});
}

export default Component;
