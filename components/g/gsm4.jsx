import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkf7gnbzc.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkf7gnbzc"/>`,
		"fallback": "picon:gsm4",
	});
}

export default Component;
