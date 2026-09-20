import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdq70ab_f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdq70ab_f"/>`,
		"fallback": "vaadin:caret-up",
	});
}

export default Component;
