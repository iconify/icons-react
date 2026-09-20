import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmar9isaa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmar9isaa"/>`,
		"fallback": "lsicon:consume-outline",
	});
}

export default Component;
