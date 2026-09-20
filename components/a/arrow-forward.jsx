import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiel0ej8k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiel0ej8k"/>`,
		"fallback": "vaadin:arrow-forward",
	});
}

export default Component;
