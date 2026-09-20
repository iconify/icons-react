import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlvh1icjw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlvh1icjw"/>`,
		"fallback": "vaadin:ctrl-a",
	});
}

export default Component;
