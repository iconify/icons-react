import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayrxfubgw.css';
import '../../css/b/b8neo7vhj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayrxfubgw"/><path class="b8neo7vhj"/>`,
		"fallback": "vaadin:credit-card",
	});
}

export default Component;
