import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op484abqr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op484abqr"/>`,
		"fallback": "game-icons:cloud-download",
	});
}

export default Component;
