import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouojj_bki.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouojj_bki"/>`,
		"fallback": "fa-solid:chalkboard",
	});
}

export default Component;
