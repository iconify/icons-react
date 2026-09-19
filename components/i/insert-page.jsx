import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thh54cc_l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thh54cc_l"/>`,
		"fallback": "carbon:insert-page",
	});
}

export default Component;
