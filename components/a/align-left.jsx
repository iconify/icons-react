import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txo-0591p.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txo-0591p"/>`,
		"fallback": "fa7-solid:align-left",
	});
}

export default Component;
