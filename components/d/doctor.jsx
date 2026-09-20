import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwj8e1b9z.css';
import '../../css/i/i6isr1r7r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwj8e1b9z"/><path class="i6isr1r7r"/>`,
		"fallback": "vaadin:doctor",
	});
}

export default Component;
