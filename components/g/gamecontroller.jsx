import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i29p0dbzb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i29p0dbzb"/>`,
		"fallback": "f7:gamecontroller",
	});
}

export default Component;
