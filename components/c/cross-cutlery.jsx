import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4byx8bud.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4byx8bud"/>`,
		"fallback": "vaadin:cross-cutlery",
	});
}

export default Component;
