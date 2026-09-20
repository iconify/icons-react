import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csrxh4e4o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csrxh4e4o"/>`,
		"fallback": "vaadin:exchange",
	});
}

export default Component;
