import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa5fotm2d.css';
import '../../css/w/w__f9-ryl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa5fotm2d"/><path class="w__f9-ryl"/>`,
		"fallback": "nimbus:credit-card",
	});
}

export default Component;
