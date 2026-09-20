import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm9ywsb4k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm9ywsb4k"/>`,
		"fallback": "vaadin:clipboard",
	});
}

export default Component;
