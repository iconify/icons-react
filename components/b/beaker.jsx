import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmicgkb4v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmicgkb4v"/>`,
		"fallback": "cil:beaker",
	});
}

export default Component;
