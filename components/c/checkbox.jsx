import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk68ltbne.css';
import '../../css/a/a0xb5cbaa.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk68ltbne"/><path class="a0xb5cbaa"/>`,
		"fallback": "foundation:checkbox",
	});
}

export default Component;
