import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s03gou64b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s03gou64b"/>`,
		"fallback": "vaadin:button",
	});
}

export default Component;
