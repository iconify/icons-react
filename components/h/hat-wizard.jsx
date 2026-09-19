import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgi4_yeue.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgi4_yeue"/>`,
		"fallback": "fa7-solid:hat-wizard",
	});
}

export default Component;
