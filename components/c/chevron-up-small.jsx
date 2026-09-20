import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w972k6jmp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w972k6jmp"/>`,
		"fallback": "vaadin:chevron-up-small",
	});
}

export default Component;
