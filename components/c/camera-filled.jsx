import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef6k_cc-g.css';
import '../../css/t/t7his9f7x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ef6k_cc-g"/><path class="t7his9f7x"/>`,
		"fallback": "lsicon:camera-filled",
	});
}

export default Component;
