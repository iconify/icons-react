import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiz6shb1s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiz6shb1s"/>`,
		"fallback": "fa7-brands:cc-amex",
	});
}

export default Component;
