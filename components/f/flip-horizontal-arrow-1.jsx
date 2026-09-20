import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6wl7ccxk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6wl7ccxk"/>`,
		"fallback": "streamline-flex:flip-horizontal-arrow-1",
	});
}

export default Component;
