import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gni1zbbzf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gni1zbbzf"/>`,
		"fallback": "vaadin:desktop",
	});
}

export default Component;
