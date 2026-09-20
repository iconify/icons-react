import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu2b7hb_r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu2b7hb_r"/>`,
		"fallback": "vaadin:google-plus",
	});
}

export default Component;
