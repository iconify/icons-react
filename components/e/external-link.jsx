import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmq9zib2l.css';
import '../../css/x/xv3ps-cxi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmq9zib2l"/><path class="xv3ps-cxi"/>`,
		"fallback": "vaadin:external-link",
	});
}

export default Component;
