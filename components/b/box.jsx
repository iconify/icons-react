import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmhxj5bon.css';

const viewBox = {"width":740,"height":750};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmhxj5bon"/>`,
		"fallback": "il:box",
	});
}

export default Component;
