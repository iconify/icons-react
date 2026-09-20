import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plarn4fbk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plarn4fbk"/>`,
		"fallback": "vaadin:angle-left",
	});
}

export default Component;
