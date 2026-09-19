import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yruwzs0qg.css';
import '../../css/x/xv8czdbir.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yruwzs0qg"/><path class="xv8czdbir"/>`,
		"fallback": "ion:create-outline",
	});
}

export default Component;
