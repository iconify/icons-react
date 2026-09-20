import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm9ywsb4k.css';
import '../../css/n/ntb6s4b4f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm9ywsb4k"/><path class="ntb6s4b4f"/>`,
		"fallback": "vaadin:clipboard-user",
	});
}

export default Component;
