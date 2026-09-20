import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5d42ccom.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5d42ccom"/>`,
		"fallback": "vaadin:circle",
	});
}

export default Component;
