import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9d05fmzy.css';
import '../../css/t/tnueqn9ky.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y9d05fmzy"/><path class="tnueqn9ky"/></g>`,
		"fallback": "streamline-color:download-circle-flat",
	});
}

export default Component;
