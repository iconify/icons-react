import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovkd8pb4b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovkd8pb4b"/>`,
		"fallback": "vaadin:exclamation-circle",
	});
}

export default Component;
