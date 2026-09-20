import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u72deestk.css';
import '../../css/a/a41-ntbbp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u72deestk"/><path class="a41-ntbbp"/>`,
		"fallback": "vaadin:hourglass",
	});
}

export default Component;
