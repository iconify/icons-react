import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdaqj9bgj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdaqj9bgj"/>`,
		"fallback": "fa-solid:grin-squint-tears",
	});
}

export default Component;
