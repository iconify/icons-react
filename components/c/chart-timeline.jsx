import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccwuv1wgp.css';
import '../../css/a/anaf4rr2n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccwuv1wgp"/><path class="anaf4rr2n"/>`,
		"fallback": "vaadin:chart-timeline",
	});
}

export default Component;
