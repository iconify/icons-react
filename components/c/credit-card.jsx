import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzxb2nerp.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzxb2nerp"/>`,
		"fallback": "foundation:credit-card",
	});
}

export default Component;
