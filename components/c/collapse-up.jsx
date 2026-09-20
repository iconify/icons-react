import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv2nmoqxg.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv2nmoqxg"/>`,
		"fallback": "oi:collapse-up",
	});
}

export default Component;
