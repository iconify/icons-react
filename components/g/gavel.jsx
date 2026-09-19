import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am565_bkb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am565_bkb"/>`,
		"fallback": "fa7-solid:gavel",
	});
}

export default Component;
