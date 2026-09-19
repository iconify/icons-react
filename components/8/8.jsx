import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xouyc9gab.css';

const viewBox = {"width":455,"height":772};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xouyc9gab"/>`,
		"fallback": "ls:8",
	});
}

export default Component;
