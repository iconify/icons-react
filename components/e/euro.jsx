import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujq57dbix.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujq57dbix"/>`,
		"fallback": "vaadin:euro",
	});
}

export default Component;
